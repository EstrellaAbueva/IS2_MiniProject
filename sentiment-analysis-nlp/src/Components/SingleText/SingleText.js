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
        console.log(result); // Log the updated value here
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

  let sentiment,description = '';

  switch (result.predictedLabel) {
    case 0:
      sentiment = 'undefined';
      description = 'This sentiment refers to a state where the emotion or sentiment expressed is not clearly defined or cannot be accurately categorized. It may indicate a neutral or ambiguous emotional state.';
      break;
    case 1:
      sentiment = 'joy';
      description = 'This sentiment embodies a feeling of great happiness, delight, or pleasure. It involves feelings of positivity, contentment, and an overall sense of well-being and satisfaction.'
      break;
    case 2:
      sentiment = 'love';
      description = 'This sentiment encompasses deep affection, care, and attachment towards someone or something. It involves feelings of warmth, tenderness, and a strong emotional connection or bond.'
      break;
    case 3:
      sentiment = 'sadness';
      description = 'This sentiment represents a state of unhappiness, sorrow, or grief. It involves feelings of melancholy, disappointment, and a sense of loss or emotional pain.'
      break;
    case 4:
      sentiment = 'anger';
      description = "This sentiment represents intense displeasure or hostility towards someone or something. It involves feelings of frustration, irritability, and a strong desire to express one's dissatisfaction or outrage."
      break;
    case 5:
      sentiment = 'fear';
      description ='This sentiment reflects a state of being afraid or anxious. It involves feelings of worry, unease, and a heightened sense of alertness in response to perceived threats or potential danger.'
      break;
    case 6:
      sentiment = 'surprise';
      description = 'This sentiment captures the feeling of astonishment or unexpectedness. It involves feelings of amazement, disbelief, and a sudden shift in attention or focus due to an unforeseen event or circumstance.'
      break;
    default:
      sentiment = '';
  }

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
        <div className={`sentiment-image ${sentiment}`} />
        <br />
        <div className='sentiment-text'>{sentiment.toUpperCase()}</div>
        <br />
        <div className='sentiment-description'>{description}</div>
      </div>
    </div>
  );
};

export default SingleText;