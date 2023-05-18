import React from 'react'
import './index.css'

export const SingleText = () => {
  return (
    <div className='container'>
      <div className='left-container'>
        <input type="text" />
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