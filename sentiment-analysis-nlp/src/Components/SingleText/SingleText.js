import React, { useEffect, useState } from 'react';
import './SingleText.css';
import TextInput from '../TextInput/TextInput';
import axios from 'axios';

export const SingleText = () => {
  const [text, setText] = useState('');
  const [clicked, setClicked] = useState(false);
  const [result, setResult] = useState('');

  const handleInputChange = (value) => {
    setText(value);
  };

  const analyzeText = () => {
    console.log(text);
    axios
      .post('https://localhost:50952/predict', {
        col0: text,
        col2: 0
      })
      .then(response => {
        setResult(response.data);
        console.log(response.data); // Log the updated value here
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleButtonClick = () => {
    setClicked(true);
    analyzeText(); // Call the analyzeText function after setting the state
  };

  useEffect(() => {
    if (clicked) {
      setClicked(false);
    }
  }, [clicked]);

  return (
    <div className='main-container'>
      <div className='left-container'>
        <TextInput label="Text to Analyze" inputValue={text} handleInputChange={handleInputChange} />
        <br />
        <button className='analyze-button' onClick={() => handleButtonClick()}>
          Analyze
        </button>
      </div>
      <div className='right-container'>
        <div className='sentiment-image'>Emoji Pic</div>
        <br />
        <div className='sentiment-description'>Sentiment Description</div>
      </div>
    </div>
  );
};

export default SingleText;