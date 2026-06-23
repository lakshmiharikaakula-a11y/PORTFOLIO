import React from 'react'
import '../Styles/Projects.css'
import kedia from '../assets/kedia.png'
import feane from '../assets/feane.PNG'
import portfolio from '../assets/portfolio.png'
import expensesplit from '../assets/expensesplit.png'
export default function Projects() {
  return (
    <div  id="projects" className="project-container">
        <h1>My Projects</h1>
        <div className="project-card">
                <img src={kedia} alt="Kedia Organic" />
                <h2>Kedia Organic</h2>
                <p>
                An e-commerce website for organic products
                 built using HTML, CSS, and JavaScript.
                </p>
                <p>Tech Stack: HTML, CSS, JavaScript</p>
                <div className="buttons">
                    <a href="https://github.com/lakshmiharikaakula-a11y/JS-project.git" target="_blank">GitHub</a>
                    <a href="js-project-six-topaz.vercel.app" target="_blank">Live Demo</a>
                </div>
        </div>
         <div className="project-card">
              <img src={feane} alt="feane" />
             <h2>Feane Restaurant</h2>
             <p>A responsive restaurant website built using
                Bootstrap framework.
             </p>
             <p>Tech Stack: HTML, CSS, Bootstrap</p>
            <div className="buttons">
                <a href="https://github.com/lakshmiharikaakula-a11y/Feane-bootstrap-project.git" target="_blank">GitHub</a>
                <a href="https://feane-bootstrap-project.vercel.app/homepage.html" target="_blank">Live Demo</a>
            </div>
        </div>
         <div className="project-card">
              <img src={portfolio} alt="portfolio" />
             <h2>Personal Portfolio</h2>
             <p>
             A responsive personal portfolio built using React.js
             showcasing my skills and projects.
             </p>
            <p>Tech Stack: React, CSS, JavaScript</p>
            <div className="buttons">
                <a href="https://github.com/lakshmiharikaakula-a11y/PORTFOLIO.git" target="_blank">GitHub</a>
                <a href="https://portfolio-r9lr.vercel.app/" target="_blank">Live Demo</a>
            </div>
        </div>

         <div className="project-card">
              <img src={expensesplit} alt="expensesplit" />
             <h2>Expense-split calculator</h2>
             <p>
              A React app that splits bills among people, includes tip calculation, 
                and shows inline error messages for invalid inputs.
             </p>
            <p>Tech Stack: React, CSS, JavaScript</p>
            <div className="buttons">
                <a href="#" target="_blank">GitHub</a>
                <a href="#" target="_blank">Live Demo</a>
            </div>
        </div>
    </div>
  )
}
