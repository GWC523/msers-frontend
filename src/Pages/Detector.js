import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useStopwatch } from 'react-timer-hook'

import './Detector.css'
import { getStudentId } from '../Helper/Utils/Common'


function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours
  } = useStopwatch({ autoStart: true });


  return (
    <div>
      <div className='timer'>
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

function Detector() {
  let navigate = useNavigate();

  return (
    <div className='page'>
        <Navbar title={"MSERS"}/>
        <div className='content d-flex justify-content-center'>
            <div class="loading">
            <span className='loader__title'>System Running</span>
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>
        <div className='d-flex justify-content-center'>
            <p className='detector__body'>Hello student ID:{getStudentId()}! The system is currently detecting your student engagement levels. Please do not close this tab while class is still ongoing. Click the end button once the class is finished. You will be redirected to a new page to fill-up the self-reported in-class student engagement survey. This data will be compared to the results computed by using the system. </p>
        </div>
        <div className='d-flex justify-content-center'>
            <MyStopwatch />
        </div>
        <button className='end__btn' onClick={() => navigate("/redirect")}>End</button>
    </div>
  )
}

export default Detector