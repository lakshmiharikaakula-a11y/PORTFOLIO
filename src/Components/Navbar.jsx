import React,{useState} from 'react'
import '../Styles/Navbar.css'

export default function Navbar() {
  let [menu,setMenu]=useState(false);
  return (
    <div>
      <div className="nav-container">
      <h1 className="navhead">Harika</h1>
      <div class="menu-icon" onClick={()=>{
        setMenu(!menu)
      }}>
         <i className="fa-solid fa-bars"></i>
      </div>
      <ul className={menu?"nav-links active" :"nav-links"}>
        <li><a href="#home"onClick={()=>{setMenu(false)}}>Home</a></li>
        <li><a href="#about" onClick={()=>{setMenu(false)}}>About</a></li>
        <li><a href="#projects" onClick={()=>{setMenu(false)}}>Projects</a></li>
        <li><a href="#skills" onClick={()=>{setMenu(false)}}>Skills</a></li>
         <li><a href="#contact" onClick={()=>{setMenu(false)}}>Contact</a></li>
      </ul>
      </div>
    </div>
  )
}
