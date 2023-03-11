import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

//Assets
import "./Homepage.css"

//css
import LandingImage from "../Assets/Images/homepage_image.png"


function Homepage() {
  const [proceed, setProceed] = useState(false);
  let navigate = useNavigate();


  return (
    <div className='page'>
        <Navbar title={"MSERS"}/>
        <div className='content'>
            <div className='row'>
                <div className='col-md-6'>
                        {proceed == true && (
                            <>
                            <p className='form__title floating'>Personal Details</p>
                            <div className='row form__content floating'>
                                <div className='col-md-6'>
                                    <input type="text" name="name" className='input__text_1' placeholder='Name'/>
                                    <input type="number" name="name" className='input__text_1 mt-4' placeholder='Age'/>
                                    <select id="standard__select" name="year_level">
                                        <option value="" selected disabled>Year Level</option>
                                        <option value="I">I</option>
                                        <option value="II">II</option>
                                        <option value="III">III</option>
                                        <option value="IV">IV</option>
                                    </select>
                                </div>
                                <div className='col-md-6'>
                                    <input type="text" name="name" className='input__text_2' placeholder='Student ID'/>
                                    <select id="standard__select" name="Gender">
                                        <option value="" selected disabled>Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">female</option>
                                    </select>
                                    <input type="text" name="program" className='input__text_2 mt-4' placeholder='Program'/>
                                </div>
                                </div>
                            <p className='form__agreement'>By clicking start, you agree to let the site record your personal data for research purposes. Your data will only be used for this purpose only. Rest assured your data will be protected for privacy and confidentiality. </p>
                            <button className='start__btn' onClick={() => navigate("/detector")}>Start</button>
                            </>
                        )}
                        {proceed == false && (
                            <>
                            <p className='homepage__title floating'>Multi-dimensional Student Engagement Recognition System (MSERS)</p>
                            <p className='homepage__body floating'>The study's goal is to develop a student engagement detector that covers the three dimensions of engagement: behavioral, emotional, and cognitive engagement in real-time using existing computer-vision algorithms as its foundation and assess its accuracy of this developed integrated system in a synchronous online discussion.</p>
                            <button className='proceed__btn' onClick={() => setProceed(true)}>Proceed</button>
                            </>
                        )}
                </div>
                <div className='col-md-6'>
                    <img src={LandingImage} className="homepage__image floating" alt="landing image"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage