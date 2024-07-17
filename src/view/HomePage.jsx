import React from 'react'
import Nav from '../components/Nav'
import {  Element } from 'react-scroll';
import FirstSection from '../components/FirstSection';
import AboutSection from '../components/AboutSection';
import News from '../components/News';

function HomePage() {
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
        <News/>
      </Element>
      <Element name="section3" className="element">
        Section 3 Content
      </Element>
    </div>
  )
}

export default HomePage
