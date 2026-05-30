import React from 'react'
import '../Styles/About.css'
import profile from '../assets/profile.jpg'

export default function About() {
  return (
    <>
      <div id="about" className="about-container">
        <div className="about-left">
            <img src={profile} alt="profile"/>
        </div>
        <div className="about-right">
             <h1>About Me</h1>
             <p>
                I am a passionate Frontend Developer with skills in
                HTML, CSS, JavaScript, and React. I enjoy building
                responsive and user-friendly web applications with
                clean and modern UI designs.

                Although I graduated in Civil Engineering, my interest
                in technology and problem-solving motivated me to
                transition into web development. I continuously
                improve my skills by building projects and practicing
                modern frontend technologies.

                I am currently looking for opportunities where I can
                grow as a developer and contribute to real-world
                projects.
             </p>
        </div>
      </div>
    </>
  )
}
