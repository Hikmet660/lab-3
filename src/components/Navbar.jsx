import React from 'react'
import '../components/Navbar.css'
import Projectlogo from '../assets/images/Attorneyster.svg'
import CallLogo from '../assets/images/Call.svg'
import EmailLogo from '../assets/images/Email.svg'
import NavbarrLogo2 from '../assets/images/NavbarLogo2.svg'
import NavbarImagee from '../assets/images/NavbarImage.svg'
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className="attorneyster">
        <div className="navbarr">
          <div className="logo-button">
            <div className="navbar-logo">
              <img src={Projectlogo} alt="" />
            </div>
            <div className="navbar-button ">
              <a href="#" className='attorneyster-button'>Book A Consultation</a>
            </div>
          </div>
       
          <div className="links-call-email attorneyster-link">

            <div className="navbar-links">

            <div className="navbar-open"><FaBars/> </div> 
              <nav data-aos="fade-down" className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-itemm">
                        <a className="nav-linkk  text-white1" aria-current="page"  href="#">Home</a>
                      </li>
                      <li className="nav-itemm">
                        <a className="nav-linkk text-white2" aria-current="page" href="#">About Us</a>
                      </li>
                      <li className="nav-itemm">
                        <a className="nav-linkk  text-white2" aria-current="page" href="#">Pages</a>
                      </li>
                      <li className="nav-itemm">
                        <a className="nav-linkk  text-white2" aria-current="page" href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>

            <div className="call-email ">

              <div className="call">
                <div className="call-img">
                  <img src={CallLogo} alt="" className='call-img1' />
                </div>
                <div className="call-us-on attorneyster-link">
                  <h6>Call Us On:</h6>
                  <a href="tel:+911-987654321">911-987654321</a>
                </div>
              </div>
              <div className="email">
                <div className="email-img">
                  <img src={EmailLogo} alt="" className='email-img1' />
                </div>
                <div className="email-us-on attorneyster-link">
                  <h6>Email Us On:</h6>
                  <a href="mailto: yourmail@mail.com">yourmail@mail.com</a>
                </div>
              </div>

            </div>  

          </div>

          <div className="laww">
            <div className="laww-left-side col-12 col-md-6 ">
              <img src={NavbarrLogo2} alt="" />
              <h6>We're Group Of Certified Law Professionals</h6>
              <p>we have helped countless maritime workers and their families go up against the largest offshore companies and win.</p>
              <div className="law-button">
                <a href="#" className='attorneyster-button2'>Get In Touch</a>
              </div>
            </div>
            
            <div  className="laww-right-side col-12 col-md-6">
              <img src={NavbarImagee} alt="" className='bottom' />
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Navbar