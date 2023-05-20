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
      <div class="menu-line"></div>
      <div className="content">
          <div>
            <h2 className="text-block">
              Single Text
            </h2>

            <p className="text-block">
            This menu enables users to input text and receive emotion-based feedback. 
            It analyzes the emotional content using NLP techniques and presents the emotion through emojis, 
            labels, or textual responses. It enhances communication by providing users with feedback on 
            their expressed emotions in applications like social media or chatbots.
            </p>
          </div>

          <div>
            <h2 className="text-block">
              File Text
            </h2>

            <p className="text-block">
              This feature allows users to upload a file for emotional analysis. 
              The system generates a graphical representation of emotions found in 
              the file, such as instances of sadness, happiness, etc. Users can add 
              remarks or comments, and the system can generate a PDF report summarizing 
              the analysis and remarks. This feature enables users to analyze emotions, 
              visualize emotional data, and create shareable PDF reports.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Menu;