import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { TechDome } from '../components/TechDome';
import { Certifications } from '../components/Certifications';
import { Community } from '../components/Community';
import { Leadership } from '../components/Leadership';
import { Blog } from '../components/Blog';
import { Gallery } from '../components/Gallery';
import { Resume } from '../components/Resume';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <TechDome />
      <Certifications />
      <Community />
      <Leadership />
      <Blog />
      <Gallery />
      <Resume />
      <Contact />
    </>
  );
};
