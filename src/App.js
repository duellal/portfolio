import './App.css';
import React from 'react';

//components
import Header from './components/header';
import Footer from './components/footer';
import Title from './components/title';
import About from './components/about'
import WorkExperience from './components/experience'
import Contact from './components/contact'
import Projects from './components/projects'

export default function App() {  
  return (
    <div className="Portfolio">
      <Header />
          <Title />
          <About />
          <Projects />
          <WorkExperience />
          <Contact />
      <Footer />
    </div>
  );
}