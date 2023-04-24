import './styles/css/App.css';
import React from 'react';

//components
import Header from './components/header';
import Footer from './components/footer';
import Title from './components/title';
import About from './components/about'
// Doing this when I have time after portfolio is complete:
// import WorkExperience from './components/experience'
import Contact from './components/contact'
import Projects from './components/projects'

export default function App() {  
  return (
    <div className="Portfolio">
      <Header />
          <Title />
          <About />
          <Projects />
          {/* 
          Doing this when I have time after portfolio is complete:

          <WorkExperience /> 
          */}
          <Contact />
      <Footer />
    </div>
  );
}