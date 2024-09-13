import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from './components/Skills/skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from "./components/ContactMe/ContactMe"
import ContactForm from './components/ContactForm/ContactForm';
import ContactInfoCard from './components/ContactInfoCard/ContactInfoCard';


const App = () => {
  
  return (
    <>
    <Navbar />
    <div className="container">
    <Hero />
    <Skills/>
    <WorkExperience />
    <ContactMe />
    <ContactInfoCard/>
      </div>
    </>
  );
};

export default App;
 