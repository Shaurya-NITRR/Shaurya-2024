import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Team from '../sections/Team'
// import Contact from '../sections/Contact';
// import FullPageLoader from '../layout/FullPageLoader';
export const TeamPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0)
   
  }, [])
  return (
       <div style={{position:"relative", zIndex:"0"}}><Team/></div>
  )
}