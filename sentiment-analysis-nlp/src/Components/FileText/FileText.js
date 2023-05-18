import React from 'react'
import './index.css'

export const FileText = () => {
  return (
    <>
      <div className='container'>
        <div className='left-container'>
          fesrfssfsf
        </div>
        <div className='right-container'>
          <button className='import'>Import</button>
          <button className='analyze'>Analyze</button>
        </div>
      </div>
      <div className='container'>
        <div className='left-container'>
          dadada
        </div>
        <div className='right-container'>
          <input className='remarks' type="text" />
          <button className='pdf'>Generate PDF</button>
        </div>
      </div>
    </>
  )
}

export default FileText;