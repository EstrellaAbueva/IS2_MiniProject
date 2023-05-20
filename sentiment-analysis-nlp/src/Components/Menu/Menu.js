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

      <div>
          <div>
            <h2 className="text-block">
              Single Text
            </h2>

            <p className="text-block">
              This Menu allows users to enter text, and the system responds by displaying the associated emotion. 
              Users input text, the system analyzes the emotional content using NLP techniques, and then 
              presents the emotion through emojis, labels, or textual responses. It enhances communication 
              experiences by providing users with feedback on their expressed emotions in various applications 
              like social media or chatbots.
            </p>
          </div>

          <div>
            <h2 className="text-block">
              Desctiption for File Text
            </h2>

            <p className="text-block">
            This option allows users to upload a file, which is then analyzed for emotional content. The system 
            generates a graphical representation of emotions, such as the number of instances of sadness, 
            happiness, etc. Users can add remarks or comments, and the system can generate a PDF report 
            summarizing the analysis and remarks for easy sharing or storage. It enables users to analyze 
            emotions in uploaded files, visually represent emotional data, and create comprehensive reports 
            in PDF format.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Menu;