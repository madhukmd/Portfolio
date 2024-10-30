import React from 'react';
import './index.css';

// const ReadMoreLink = () => {
//   return (
//     <a
//       href="/about"
//       className="button-read-more"

//     >
//       Read More
//     </a>
//   );
// };

const AboutText = () => {
  return (
    <p>
      Hi, I'm Madhu, an enthusiastic developer eager to embark on my journey in the tech industry. 
      With a solid foundation MERN stack, I've dedicated my time to learning and creating engaging web applications. 
      While I may not have formal work experience yet, I have developed several projects that reflect my passion for coding and problem-solving. 
      I am excited to showcase my work and continuously grow as a developer. I'm actively preparing for interviews and looking forward to applying my skills in real-world scenarios.
    </p>
  );
};

const DeveloperImage = () => {
  return (
    <div
      className="developer-image-container"
 
    >
      <img
        src="/aboutme.png"
        alt="Developer Headshot"
        className="developer-image-about"
      />
    </div>
  );
};

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="developer-image-section" >
        <DeveloperImage />
      </div>
      <div className="about-content-section" >
        <h2 className="about-heading" >About Me</h2>
        <AboutText />
        {/* <div className="read-more-button-container" >
          <ReadMoreLink />
        </div> */}
      </div>
    </div>
  );
};

export default About;
