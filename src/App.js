import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Services from './Components/services/Services';
import Education from './Components/education/Education';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Scrollup from './Components/scrollUp/Scrollup';
import Work from './Components/work/Work';

function App() {
  return (
    <>
      
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Education/>
        <Skills/>
        <Work/>
        <Services/>
        <Contact/>
      </main>
      <Footer/>
      <Scrollup/>
      
    </>
  );
}

export default App;
