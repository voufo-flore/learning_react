import React, { useRef } from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../Utils/data';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import Slider from 'react-slick';

const WorkExperience  = () => {
  
  const sliderRef = useRef();

  const settings ={
    dots: false,
    infinite: false,
    speed: 500,
    slideToShow:2,
    slideToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
        slideToShow:1,
        slideToScroll: 1,
        },
      },
    ],
  };

const slideRight = () => {
  sliderRef.current.slickNext();
}
const slideLeft = () => {
  sliderRef.current.slickPrev();
}
  
  return (
    <section className="experience-container">
        <h5>WorkExperience</h5>

        <div className='experience-content'>
          <div className="arrow-right" onClick={slideRight}>
            <span className="material-symbols-outlined"></span>
           </div>

          <div className="arrow-left" onClick={slideLeft}>
            <span class="material-symbols-outlined"></span>
           </div>

          <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item} />  
        ))}
        </Slider>
            </div>
    </section>

  );
};

export default WorkExperience;
 