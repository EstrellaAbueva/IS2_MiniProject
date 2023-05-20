import {React, useEffect, useState} from 'react';
import './SingleText.css';
import TextInput from '../TextInput/TextInput';
import axios from 'axios';

export const SingleText = () => {
  const [text, setText] = useState("");
  const [clicked, setClicked] = useState(false);
  const [result, setResult] = useState();

  useEffect(() => {
    if (clicked) {
      setClicked(false);
      axios
        .post('https://localhost:50952/predict', {
          params: {
            col0: text,
            col2: 0
          }
        })
        .then(response => {
          setResult(response.data);
          console.log(result);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [clicked]);

  return (
      <div className='main-container'>
      <div className='left-container'>
        <TextInput label={"Text to Analyze"} value={text} onChange={setText}/>
        <br />
        <button className='analyze-button' onClick={() => setClicked(true)}> Analyze </button>
      </div>
      <div className='right-container'>
        <div className='sentiment-image'>Emoji Pic</div>
        <br />
        <div className='sentiment-description'>Sentiment Description</div>
      </div>
    </div>
  )
}

export default SingleText;