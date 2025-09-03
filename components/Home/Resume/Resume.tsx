import React from 'react'
import { FaBrain, FaCloud, FaCodepen, FaReact } from 'react-icons/fa'
import ResumeCard from './ResumeCard'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
            {/* work section  */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                    My work <span className='text-cyan-200'>Experience</span>
                </h1>
                <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    <ResumeCard Icon={FaCodepen} role="Full-Stack Developer"/>
                    <ResumeCard Icon={FaCloud} role="Cloud Engineer"/>
                    <ResumeCard Icon={FaBrain  } role="Machine Learning Engineer"/>
                </div>
            </div>
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                    My <span className='text-cyan-200'>Education</span>
                </h1>
                <div className='mt-10' 
                    data-aos="zoom-in" 
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="300"
                >
                    <ResumeCard 
                        Icon={BiBadge} 
                        role="Comptech Institute" 
                        date="Jan 2023 -Dec 2025"
                    />
                    <ResumeCard 
                        Icon={FaReact} 
                        role="Bsc Computer Science" 
                        date="Jan 2018 -Dec 2022"
                    />
                    <ResumeCard 
                        Icon={BsDatabase} 
                        role="Certificate of Cloud Architecture and CompTia 701"
                        date='Jan 2024 -Dec 2025'
                    />
                </div>

            </div>


        </div>
           
    </div>
  )
}

export default Resume