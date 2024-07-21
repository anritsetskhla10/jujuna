import React from 'react'
import Nav from '../components/Nav'
import {  Element } from 'react-scroll';
import FirstSection from '../components/FirstSection';
import AboutSection from '../components/AboutSection';
import News from '../components/News';
import Bottle from '../components/Bottle';
import Bar from '../components/Bar';
import Cocktails from '../components/Cocktails';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

function HomePage() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem('theme') === 'dark';
    setIsDarkMode(darkModePreference);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <div>
      <Nav/>
      <Element name="main" >
        <FirstSection/>
      </Element>
      <Element name="about" >
        <AboutSection/>
      </Element>
      <Element name="news" >
         <News isDarkMode={isDarkMode} />
      </Element>
      <Element name="bottle">
        <Bottle/>
      </Element>
      <Element name="cocktails" >
        <Cocktails/>
      </Element>
      <Element name="bar" >
        <Bar/>
      </Element>
      <Element name="contact">
        <Contact/>
      </Element>
      <Footer isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  )
}

export default HomePage
