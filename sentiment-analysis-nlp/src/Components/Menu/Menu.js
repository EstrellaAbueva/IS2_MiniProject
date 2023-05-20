import { React } from 'react';
import './Menu.css';

export const Menu = () => {
  return (
    <div className="container">
        <div className="content">
        <h1 className="one">
            Sentiment Analysis App
            <span className='one'>By: TEAM G</span>
        </h1>
        <p className="text-block">
          The Sentiment Analysis App Program is a powerful tool that analyzes the sentiment expressed in text data 
          and provides valuable insights into the emotional tone and polarity of the input. 
          By employing advanced natural language processing (NLP) techniques, the program can accurately 
          determine whether a given text conveys the following emotions:
        </p>

        <ol type='1' className='list'>
          <li>Emotion Undefine</li>
          <li>Joy</li>
          <li>Love</li>
          <li>Sadness</li>
          <li>Anger</li>
          <li>Fear</li>
          <li>Surprise</li>
        </ol>
      </div>
    </div>
  )
}

export default Menu;