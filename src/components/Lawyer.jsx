import React from 'react'
import '../components/Lawyer.css'
import LawyerImagee1 from '../assets/images/LawyerImage1.svg'
import LawyerImage2 from '../assets/images/LawyerImage2.svg'
import NavbarLogoo2 from '../assets/images/NavbarLogo2.svg'
import PeterProfile from '../assets/images/Profile.svg'
import CaseSuccess from '../assets/images/CaseSuccess.svg'
const Lawyer = () => {
  return (

    <>
    <div className="lawyer-bacground11">
    <div className="lawyer-bacground ">
      <div className="lawyer">
        <div className="lawyer-left-side">
          <div className="lawyerImagee1">
            <img src={LawyerImagee1} alt=""  />
          </div>
          <div className="lawyerImage2">
            <img src={LawyerImage2} alt="" />
          </div>
        </div>

        <div className="lawyer-right-side">

        <div className="lawyer-right-side1">
          <h1>Welcome to Attorney Law -<br />
          Lawyer & Law Firm Company
          </h1>
          <img src={NavbarLogoo2} alt="" />
          <p>Although we are located in Brooklyn, our maritime lawyers are proud to help the injured  throughout the nation, including workers who were working in foreign waters at the time  of the incident go up against the largest offshore companies and win.</p>
        </div>

         <div className="lawyer-right-side2">
          <img src={PeterProfile} alt="" />
          <h1>Peter Parker</h1>
         </div>
            <div className="caseSuccess">
              <div className="casee">
                    <img src={CaseSuccess} alt="" />
                    <h6>95%<br/>Case Success</h6>
              </div>
              <div className="yearsExperience">
                    <h3>35+</h3>
                    <p>Years<br/>Experience</p>
              </div>
            </div>

        </div>


      </div>
</div>
</div>
    </>
  )
}

export default Lawyer