import React, { useState } from 'react'
import './header.css'

const Header = () => {
    // window.addEventListener("scroll", function(){
    //     const show_header = document.querySelector(".show_header");

    //     if(this.scrollY >=1060) show_header.classList.add("show-header")
    //     else show_header.classList.remove("show-header")
    // })
    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header");

        if(this.scrollY >=80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")
    })

    const[Toggle,showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home')

  return (
    <header className='header show_header'>
      <nav className="nav container">
        <a href="index.html" className="nav_logo"><span className='special logo'>
            PORTFOLIO
            </span></a>
        <div className={Toggle ? "nav_menu show-menu":"nav_menu"}>
            <ul className="nav_list grid">
                <li className="nav_item">
                    <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav=== "#home" ? 'nav_link active-link' : 'nav_link'}>
                        <i className="uil uil-estate nav_icon"></i><span className='list'>Home</span>
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav=== "#about" ? 'nav_link active-link' : 'nav_link'}>
                        <i className="uil uil-user nav_icon"></i><span className='list'>About</span>
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav=== "#skills" ? 'nav_link active-link' : 'nav_link'}>
                        <i className="uil uil-file-alt nav_icon"></i><span className='list'>Skills</span>
                    </a>
                </li>
                
                <li className="nav_item">
                    <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav=== "#projects" ? 'nav_link active-link' : 'nav_link'}>
                        <i className="uil uil-scenery nav_icon"></i><span className='list'>Projects</span>
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav=== "#services" ? 'nav_link active-link' : 'nav_link'}>
                        <i className="uil uil-briefcase-alt nav_icon"></i><span className='list'>Services</span>
                    </a>
                </li>
                <li className="nav_item">
                    <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav=== "#contact" ? 'nav_link active-link' : 'nav_link'}>
                        <i className="uil uil-message nav_icon"></i><span className='list'>Contact</span>
                    </a>
                </li>
            </ul>
            <i class="uil uil-times nav_close" onClick={()=>showMenu(!Toggle)}></i>
        </div>
        <div className="nav_toggle" onClick={()=>showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header

