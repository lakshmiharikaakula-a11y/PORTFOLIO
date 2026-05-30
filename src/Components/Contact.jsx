import React from 'react'
import '../Styles/Contact.css'

export default function Contact() {
  return (
    <div id="contact" className="contact-container">
         <h1>Contact Me</h1>
         <form>
            <input type="text" placeholder="Full Name"/>
            <input type="email" placeholder="Email Address"/>
             <input type="tel" placeholder="Phone Number" />
             <textarea rows="6" placeholder="Your Message"></textarea>
             <button>Send Message</button>
        </form>
    </div>
  )
}
