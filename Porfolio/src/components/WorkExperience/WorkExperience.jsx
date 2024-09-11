import React from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../Utils/data';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import slid

const WorkExperience  = () => {
  
  return (
    <section className="experience-container">
        <h5>WorkExperience</h5>

        <div className='experience-content'>
            {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item} />  
        ))}
            </div>
    </section>

  );
};

export default WorkExperience;
 