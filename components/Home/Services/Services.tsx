import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div
     className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'> 
            Collaborate with brand <br /> and agencies to create <br /> impactful results
        </h1> 
        <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                <ServiceCard 
                icon="/images/s1.png" 
                name="UI and UX" 
                description="Designing Top-notch User Interface and User Experience Design" />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <ServiceCard 
                icon="/images/s2.png" 
                name="Backend Development" 
                description="Designing and Implementing Robust Backend Solutions" />
            </div>
            <div  data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <ServiceCard 
                icon="/images/s2.png" 
                name="Cloud Engineering" 
                description="Designing and Implementing Scalable Cloud Solutions" />
            </div>
            <div  data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <ServiceCard 
                icon="/images/s3.png" 
                name="ML & AI" 
                description="Designing and Implementing Machine Learning and AI Solutions" />
            </div>
        </div>
    </div>
  )
}

export default Services