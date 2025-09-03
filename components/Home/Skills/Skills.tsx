"use client"
import React from 'react'
import { SiDjango, SiJavascript, SiNextdotjs, SiPython, SiReact, SiTypescript } from 'react-icons/si';
import Tilt from 'react-parallax-tilt';

const skills = [
    {
        name: "JavaScript",
        icon: <SiJavascript />,
        percentage: 89,
    },
    {
        name: "TypeScript",
        icon: <SiTypescript />,
        percentage: 85,
    },
    {
        name: "React jS",
        icon: <SiReact />,
        percentage: 92,
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs />,
        percentage: 90
    },
    {
        name: "python",
        icon: <SiPython />,
        percentage: 95
    },
    {
        name: "Django",
        icon: <SiDjango />,
        percentage: 95,
    },

]

const Skills = () => {
  return (
    <div className='text-white pt-16 pb-16 '>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
           My <span className='text-cyan-300'>Skills</span>
            Collaborate with brand <br /> and agencies to create <br /> impactful results

        </h1>
        <div className='flex flex-wrap justify-center gap-6 mt-16'>
            {skills.map((skill, index) => {
                return (
                    <Tilt key={skill.name} scale ={1.5} transitionSpeed={400}>
                        <div 
                            data-aos="flip-right" 
                            data-aos-anchor-placement="top-center"
                            data-aos-delay={index * 100}
                            className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center 
                            justify-center shadow-lg transition hover:scale-105'>
                            <div className='text-5xl mb-4 text-gray-300'>
                                {skill.icon}

                            </div>
                            <p className='text-2xl font-semibold'>
                                {skill.percentage}
                            </p>
                            <p className='text-purple-400 mt-1'>{skill.name}</p>
                        </div>
                    </Tilt>
                );
            })}
        </div>
    </div>
  )
}

export default Skills