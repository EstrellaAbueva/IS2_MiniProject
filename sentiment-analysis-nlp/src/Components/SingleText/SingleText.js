import { React, useEffect, useState } from 'react';
import './SingleText.css';
import TextInput from '../TextInput/TextInput';
import axios from 'axios';

export const SingleText = () => {
  const [text, setText] = useState('');
  const [clicked, setClicked] = useState(false);
  const [result, setResult] = useState();

  const handleInputChange = (value) => {
    setText(value);
  };

  useEffect(() => {
    if (clicked) {
      console.log(text);
      setClicked(false);
      axios
        .post('https://localhost:50952/predict', {
          col0: text,
          col2: 0
        })
        .then(response => {
          setResult(response.data);
          console.log(result); // Log the updated value here
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [clicked]);

  const handleTextChange = event => {
    setText(event.target.value);
  };

  return (
    <div className='main-container'>
      <div className='left-container'>
        <TextInput label={"Text to Analyze"} inputValue={text} handleInputChange={handleInputChange}/>
        <br />
        <button className='analyze-button' onClick={() => setClicked(true)}>
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