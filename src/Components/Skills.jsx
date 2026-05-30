import React from 'react'
import '../Styles/Skills.css'
export default function Skills() {
  return (
    <div id="skills" className="skills-container">
         <h1>My Skills</h1>
         <div className="skill-grid">
            <div className="skill-card"> 
                <i className="fa-brands fa-html5"></i>
                <h2>HTML5</h2>
                 <p>Semantic structure of web pages</p>
            </div>
            <div className="skill-card">
                 <i className="fa-brands fa-css3-alt"></i>
                <h2>CSS</h2>
                 <p>Responsive layouts and animations</p>
            </div>
            <div className="skill-card">
              <i className="fa-brands fa-js"></i>
                <h2>JavaScript</h2>
                <p>Logic building and interactivity</p>
            </div>
            <div className="skill-card">
                 <i className="fa-brands fa-react"></i>
                <h2>React</h2>
                <p>Reusable components & SPA</p>
            </div>
              <div className="skill-card">
                 <i className="fa-brands fa-git-alt"></i>
                <h2>Git</h2>
                <p>Version control and collaboration</p>
            </div>
         </div>
      
    </div>
  )
}
