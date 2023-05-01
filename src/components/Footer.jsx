import React from 'react'
import '../components/Footer.css'
import Attorneysterr1 from '../assets/images/Attorneyster1.svg'
import Attorneysterr2 from '../assets/images/Attorneyster2.svg'
import Attorneyster3 from '../assets/images/Attorneyster3.svg'
import FooterFacebook from '../assets/images/Facebook1.svg'
import FooterTwitter from '../assets/images/Twitter1.svg'
import FooterInstagram from '../assets/images/Instagram1.svg'
import FooterPinterest from '../assets/images/Pinterest1.svg'
const Footer = () => {
  return (
    <>

      <div className="footerr">

        <div className="footerr-img">
          <img src={Attorneysterr1} alt="" />
          <img src={Attorneysterr2} alt="" />
          <img src={Attorneyster3} alt="" />
        </div>

        <div className="footer-links">

          <div className="footer-link-1">
            <div className="quick-link-h3 footer-h3">
              <h3>Quick Link</h3>
            </div>
            <div className="footer-links1">
              <div className="footer-links12 footer-top">
                <div className="footer1 footer-bottomm attorneyster-footer-links">
                  <a href="#">Home</a>
                  <a href="#">About Us</a>
                  <a href="#">Pricing</a>
                  <a href="#">Testimonial</a>
                  <a href="#">Contact Us</a>
                </div>
                <div className="footer2 footer-bottomm attorneyster-footer-links">
                  <a href="#">Blog</a>
                  <a href="#">Blog Single</a>
                  <a href="#">Cases</a>
                  <a href="#">Cases Single</a>
                  <a href="#">Practice Areas</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-link-2">
            <div className="Utility Pages-h3 footer-h3">
              <h3>Utility Pages</h3>
            </div>
            <div className="footer-links2 footer-top">
              <div className="footer11 footer-bottomm attorneyster-footer-links">
                <a href="#">Style guide</a>
                <a href="#">Licenses</a>
                <a href="#">Protected</a>
                <a href="#">Changelog</a>
                <a href="#">Error Page</a>
              </div>
            </div>
          </div>

          <div className="footer-link-3">
            <div className="Practice Area-h3 footer-h3">
              <h3>Practice Area</h3>
            </div>
            <div className="footer-links3 footer-top">
              <div className="footer22 footer-bottomm attorneyster-footer-links">
                <a href="#">Business Law</a>
                <a href="#">Construction Law</a>
                <a href="#">Car Accident</a>
                <a href="#">Criminal Law</a>
                <a href="#">Family Law</a>
              </div>
            </div>
          </div>

          <div className="footer-link-4">
            <div className="Contact Us-h3 footer-h3">
              <h3>Practice Area</h3>
            </div>
            <div className="footer-links4">
              <div className="footer33 footer-top">
                <div className="footer-p">
                  <p>Attorney Law Office, 121 King Street
                    <br />
                    Las Vegas 90027,USA.
                  </p>
                </div>
                <div className="footer-call footer-call-email attorneyster-footer-links">
                  <p>Phone:</p>
                  <a href="tel:+(011) 9876 54321">(011) 9876 54321</a>
                </div>
                <div className="footer-email footer-call-email attorneyster-footer-links">
                  <p>Email:</p>
                  <a href="mailto:info@example.com">info@example.com</a>
                </div>

              </div>
            </div>
          </div>
        </div> 
         
   <div className="footer-copyright12">
     <div className="footer-copyright">
      <div className="footer-copyright1 footer-copyright-link">
        <p>Copyright © Attorney Law | Designed by  
        <a href="https://www.victorflow.com/">VictorFlow</a>
          - Powered by   
        <a href="https://webflow.com/">Webflow.</a>
        </p>
      </div>
   
       <div className="footer-follow">
        <div className="footer-follow-p">
          <p>Follow :</p>
        </div>
           <div className="footer-follow-links">
                <a href="https://www.facebook.com/"><img src={FooterFacebook} alt="" /></a>
                <a href="https://twitter.com/"><img src={FooterTwitter} alt="" /></a>
                <a href="https://www.instagram.com/"><img src={FooterInstagram} alt="" /></a>
                <a href="https://www.pinterest.com/"><img src={FooterPinterest} alt="" /></a>
           </div>
       </div>
     </div>
     

 </div>

      </div>

     

    </>
  )
}

export default Footer