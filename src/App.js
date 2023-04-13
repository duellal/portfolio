import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"

//components
import Header from './components/header';
import Footer from './components/footer';
import Title from './components/title';
import About from './components/about'

function App() {
  return (
    <div className="Portfolio">
      <Header />
        <BrowserRouter>
          <Routes>
            <Route exact path="contact"></Route>
            <Route exact path="experience"></Route>
            <Route exact path="projects"></Route>
            <Route exact path="about" element={<About />}></Route>
            <Route exact path="/" element={<Title />}>
              {/* <Title /> */}
            </Route>
          </Routes>
          </BrowserRouter>
      <Footer />
    </div>
  );
}


export default App;
