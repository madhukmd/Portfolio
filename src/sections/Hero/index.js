import React from "react";
import "./index.css";

function Hero() {
  return (
    <section id="home" className="hero">
    <div className="hero-content">
    <img
          alt="dp"
          src="https://res.cloudinary.com/dus898gxi/image/upload/v1730208203/bb_ujgor0.png"
          className="hero-image"
        />
      <div className="hero-section">
      <h1 className="animate-slide-up name">Hi, I'm Madhu.K</h1>
      <h1 className="animate-slide-up-delay developer">Full Stack Web Developer.</h1>
      <p className="animate-slide-up-delay-2">
        I build exceptional and accessible digital experiences for the web.
      </p>
      </div>
      
    </div>
  </section>
  );
}

export default Hero;
