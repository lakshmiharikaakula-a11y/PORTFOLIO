import React from 'react'
import '../Styles/Footer.css'
export default function Footer() {
  return (
    <div id="footer" class="footer-container">
        <h2>Lakshmi Harika</h2>
        <p>
            Frontend Developer | React Developer
        </p>
        <div className="footer-icons">
            <a href="https://github.com/lakshmiharikaakula-a11y">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href="http://www.linkedin.com/in/lakshmi-harika-akula-3960353a8" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
                <i className="fa-brands fa-instagram" target="_blank"></i>
            </a>
             <a href="mailto:lakshmiharikaakula@gmail.com" target="_blank">
                <i className="fa-solid fa-envelope"></i>
            </a>
        </div>
            <p>
            © 2026 All Rights Reserved.
            </p>
    </div>
  )
}
