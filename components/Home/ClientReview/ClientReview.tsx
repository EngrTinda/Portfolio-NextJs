"use client";
// import { table } from 'console'
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import ClientReviewCard from './ClientReviewCard'

const responsive ={
    desktop: {
        breakpoint: {max: 3000, min: 1324},
        items: 3,
        slidesToSlide: 3
    },
    
    tablet: {
        breakpoint: {max: 1324, min: 764},
        items: 2,
        slidesToSlide: 1
        },
    mobile: {
        breakpoint: {max: 764, min: 0},
        items: 1,
        slidesToSlide: 1
    },
  }
const ClientReview = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'> 
            Kind Words from Satisfied <br /> {" "}
            <span className='text-cyan-200'>Clients</span>

        </h1>
        <div className='mt-16 w-[70%] mx-auto'>
          <Carousel
            
            showDots={false}
            responsive={responsive}
            
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            
          >
            <ClientReviewCard 
              image='/images/c1.png' 
              name="Sophie Mueni" 
              role="CEO, landscape"
            />
            <ClientReviewCard 
              image='/images/c2.png' 
              name="Michael Mutinda" 
              role="Software Developer"
            />
            <ClientReviewCard 
              image='/images/c3.png' 
              name="Annie Wavinya" 
              role="UI/UX Designer"
            />
            <ClientReviewCard 
              image='/images/c4.png' 
              name="Engr.Tinda" 
              role="Machine Learning Engineer"
            />
            <ClientReviewCard 
              image='/images/c5.png' 
              name="Emma Mwende" 
              role="Cloud architect"
            />
            
          </Carousel>

        </div>
    </div>
  )
}

export default ClientReview