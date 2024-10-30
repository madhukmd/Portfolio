import React from "react";
import Header from "./layout/Header";
import SocialSidebar from "./layout/SocialSidebar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";
import FeaturedProjects from "./sections/FeaturedProjects";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";


function App() {
  return (
    <ThemeProvider>
      <div className="portfolio">
        <Header />
        <SocialSidebar />
        <main>
          <Hero />
          <Skills />
          <FeaturedProjects />
          <About />
          <Contact/>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
