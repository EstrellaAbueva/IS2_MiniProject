import React from 'react'
import './SingleText.css'
import TextInput from '../TextInput/TextInput'

export const SingleText = () => {
  return (
      <div className='main-container'>
      <div className='left-container'>
        <TextInput label={"Text to Analyze"}/>
        <br />
        <button className='analyze-button'>Analyze</button>
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