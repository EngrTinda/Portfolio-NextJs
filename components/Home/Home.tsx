"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import ClientReview from './ClientReview/ClientReview'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css';


const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos')
      AOS.init({
        duration: 1000, // Animation duration
        easing: 'ease',
        once: true, // Whether animation should happen only once - while scrolling down
        anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
      });
    };
    initAOS();
  }, []);

  return (
    <div className='overflow-hidden '>
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <ClientReview />
      <Blog />
      <Contact />

    </div>
  )
}

export default Home