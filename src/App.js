import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom"

//components
import Header from './components/header';
import Footer from './components/footer';
import Title from './components/title';
import About from './components/about'
import Experience from './components/experience'
import Contact from './components/contact'
import Projects from './components/projects'

function App() {
  return (
    <div className="Portfolio">
      <Header />
          <Routes>
            <Route index element={<Title />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="experience" element={<Experience />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
      <Footer />
    </div>
  );
}


export default App;
