import React from 'react'
import  '../components/Explore.css'
import PracticeAreaslogo from '../assets/images/NavbarLogo2.svg'
const Explore = () => {
  return (
    <div className="practice-areas">
    <div className="prac-areas-left-side">
      <h1>Explore The perfect<br />Our Practice Areas</h1>
      <img src={PracticeAreaslogo} alt="" />
    </div>
    <div className="prac-areas-right-side">
      <p>We are a group of civil litigation/trial attorneys who focus on providing a justice based on the issues relating to insurance defense, insurance coverage, bad faith, insurance fraud and criminal litigation.</p>
    </div>
  </div>
  )
}

export default Explore