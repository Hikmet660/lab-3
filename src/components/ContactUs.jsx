import React from 'react'
import '../components/ContactUs.css'
import ContactUss from '../assets/images/NavbarLogo2.svg'
import ContactCall from '../assets/images/ContactUsCall.svg'
const ContactUs = () => {
  return (
   <>
   <div className="contact-us">

    <div className="contact-us-left-side">
       <h2>Our Professional Expert law Team Is Always Ready To Serve You</h2>
       <img src={ContactUss} alt="" />
       <p>We’re always available for new cases big or small. Send us an email and we’ll get in touch shortly, or phone between 8:00 am and 7:00 pm Monday to Saturday.</p>
      <div className="contact-us-left-side-button">
        <a href="#" className='contact-us-button'>Contact Us</a>
      </div>
    </div>
  <div className="contact-us-right-side">
    <div className="contact-us-right-side-1">
      <div className="contact-us-bacground">
        <h2>Get a Free Consultation</h2>
        <p>You can get free consultation and case evaluation from us via the following contact number</p>
      </div>
    <div className="contact-us-call">
        <div className="contact-us-img">
          <img src={ContactCall} alt="" />
        </div>
      <div className="contact-us-call-on attorneyster-link">
         <h6>Call Us On:</h6>
         <a href="tel:+911-987654321">911-987654321</a>
      </div>
    </div>
</div>
  </div>

   </div>
   </>
  )
}

export default ContactUs