import React from 'react'
import '../components/Case.css'
import Caselogo from '../assets/images/CaseLogo.svg'
import TrustedClients from '../assets/images/TrustedClients.svg'
import SuccessfulCases from '../assets/images/SuccessfulCases.svg'
const Case = () => {
    return (
        <>
            <div className="fighting-to-get-what">
                <h2>Fighting To Get What<br />You Deserve</h2>
                <img src={Caselogo} alt="" />
                <p>Our board-certified family law attorneys work to achieve a fair and<br />timely resolution of the legal issues in your case.  </p>
            </div>

            <div className="trusted-clients12 row">

                 <div className="trusted-clients">
                    <div className="trusted-clients-img-1">
                        <img src={TrustedClients} alt="" />
                        <h3>7230</h3>
                    </div>
                    <div className="trusted-clients-img-2">
                        <h4>Trusted Clients<br /></h4>
                        <p>Number Of Clients We've</p>
                    </div>
                </div>

                <div className="successful-cases">
                    <div className="successful-cases-img-1">
                        <img src={SuccessfulCases} alt="" />
                        <h3>98%</h3>
                    </div>
                    <div className="successful-cases-img-2">
                        <h4>Successful Cases</h4>
                        <p>Largest Winning Value</p>
                    </div>
                </div>
             
               

                <div className="case-served">

                    <div className="case-served-h3-h4">
                        <h3>15,890+</h3>
                        <h4>Criminal Defense<br />Case Served</h4>
                    </div>

                </div>

             </div>    
        </>
    )
}

export default Case   