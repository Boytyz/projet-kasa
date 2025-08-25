import React from 'react';
import Banner from '../../composants/banner/banner';
import Collapse from '../../composants/collapse/collapse';
import './about.scss'; 
import aboutData from '../../data/aboutdata.json'; 
const About = () => {
  return (
    <div>
      <Banner
        imageUrl="/assets/banner_apropos.jpg"
        title="" />
      <div className="about-content">
        {aboutData.map((item) => (
          <Collapse
            key={item.id}
            title={item.title}
            className="about__collapse"
          >
            <p>{item.content}</p>
          </Collapse>
        ))}
      </div>
    </div>
  );

};

export default About;