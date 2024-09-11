import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from './components/Skills/skills';
import WorkExperience from './components/WorkExperience/WorkExperience';


const App = () => {
  
  return (
    <>
    <Navbar />
    <div className="container">
    <Hero />
    <Skills/>
    <WorkExperience />
    <ContactMe />
      </div>
    </>
  );
};

export default App;
 