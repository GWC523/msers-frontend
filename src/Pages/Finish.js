import React from 'react'
import Navbar from '../Components/Navbar'

import './Finish.css'

function Finish() {
  return (
    <div className='page'>
        <Navbar title={"MSERS"}/>
         <div className='content mt-5 d-flex justify-content-center'>
            <p className='redirect__header'>Thank you! But wait!</p>
         </div>
         <div className='content d-flex justify-content-center'>
            <p className='redirect__body'>Your participation is deeply appreciated. Before the testing ends, please answer this <a href="https://www.google.com/forms/about/" className='link'>Google form</a>. Your response is needed for the completion of the study. </p>
         </div>

    </div>
  )
}

export default Finish