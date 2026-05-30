import React from 'react'
import profile from '../assets/profile.jpg';
import '../Styles/Hero.css';
import resume from '../assets/Lakshmi_harika_Akula_Resume.pdf'

export default function Hero() {
  return (
    <>
      <div id="home" className='hero-container'>
        <div className="hero-left">
            <h3>Hello I'm</h3>
            <h1>Lakshmi Harika</h1>
            <h2>Frontend Developer</h2>
             <p>I build responsive and user-friendly
                web applications using React.
            </p>
            <a href={resume} download>
            <button>Download CV</button>
            </a>
        </div>
        <div className="hero-right">
            <img src={profile} alt="profile"/>
                   </div>

      </div>
    </>
  )
}
