import React from 'react'
import '../components/Logo.css'
import CaseLogoo from '../assets/images/CaseLogo.svg'
import Logo from './Logo'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper';
import projectLogo1 from '../assets/images/IMAGE-5.png'
import projectLogo2 from '../assets/images/IMAGE-4.png'
import projectLogo3 from '../assets/images/IMAGE-1.png'
import projectLogo4 from '../assets/images/IMAGE-3.png'
import projectLogo5 from '../assets/images/IMAGE-2.png'
const Logos = () => {
  return (
   <>
  
   <div className="meet-the-partners">
    <img src={CaseLogoo} alt="" />
    <h1>Meet The Partners</h1>
    <img src={CaseLogoo} alt="" />
   </div>

 <div className="logos">
   <Swiper
        slidesPerView={3} 
        spaceBetween={30}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
            340: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        autoplay={
            {
                delay:2000 // Sürətini təyin edirsən
            }
        }
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> <Logo shirketinLogosu={projectLogo1} klassadi="logopadding"/> </SwiperSlide>
        <SwiperSlide> <Logo shirketinLogosu={projectLogo2} /> </SwiperSlide>
        <SwiperSlide> <Logo shirketinLogosu={projectLogo3} klassadi="logopadding" /> </SwiperSlide>
        <SwiperSlide> <Logo shirketinLogosu={projectLogo4} klassadi="logopadding"/> </SwiperSlide>
        <SwiperSlide> <Logo shirketinLogosu={projectLogo5} klassadi="logopadding"/> </SwiperSlide>
        
      </Swiper>
  </div>
   </>
  )
}

export default Logos