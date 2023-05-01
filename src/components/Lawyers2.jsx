import React from 'react'
import '../components/Lawyers2.css'
import Lawyers from '../assets/images/NavbarLogo2.svg'
import HistoryImage from '../assets/images/IMAGE-6.png'
const Lawyers2 = () => {
  return (
    <>
    <div className="lawyers-bacground">
      <div className="lawyers">
  <div className="lawyers-1">
        <div className="lawyers-left-side">
          <h1>We Are Top Lawyers<br /> And History</h1>
          <img src={Lawyers} alt="" />
        </div>
        <div className="lawyers-h-p">
          <h3>2000 – Establishment of the Company!</h3>
          <p>The origins of lawyers and the first founders of law make their appearance in Ancient Greece and Rome.</p>
        </div>
        <div className="lawyers-h-p">
          <h3>2006 – Together we Build</h3>
          <p>Lawyers in medieval times found themselves struggling to make a living as the legal profession collapsed in the western world.</p>
        </div>
        <div className="lawyers-h-p">
          <h3>2008 – Completed 10000 cases</h3>
          <p>When did lawyers first start practicing in the United States? It’s important to understand that the history of attorneys.</p>
        </div>
        <div className="lawyers-h-p">
          <h3>2011 – We are Number One</h3>
          <p>Eventually, the prejudices against lawyers started to fall away and the legal profession began to gain respect and power.</p>
        </div>
    </div>

    <div className="history-image">
      <img src={HistoryImage} alt="" />
    </div>

    <div className="lawyers-right-side">

        <div className="lawyers-h">
            <h1>We Are Specialised<br /> And Experienced</h1>
            <img src={Lawyers} alt="" />
        </div>
      <div className="lawyers-p">
        <p>Keep yourself up-to-date on your area of law. Be aware of new developments, as laws and rules often change based on the situation and new cases are being decided every day.</p>
      </div>
      <div className="lawyers-p-1">
        <p>Divorce And Family Cases</p>
        <p>75%</p>
      </div>

      <div className="lawyers-p-bottom-1">
        <div className='p-bottom-1'></div>
      </div>

      <div className="lawyers-p-2">
        <p>Property And Construction</p>
        <p>80%</p>
      </div>
      
      <div className="lawyers-p-bottom-2">
        <div className='p-bottom-2'></div>
      </div>

      <div className="lawyers-p-3">
        <p>Banking And Finance</p>
        <p>75%</p>
      </div>
      
      <div className="lawyers-p-bottom-3">
        <div className='p-bottom-3'></div>
      </div>

      <div className="lawyers-p-4">
        <p>Accident & Wrongful Death</p>
        <p>90%</p>
      </div>
      
      <div className="lawyers-p-bottom-4">
        <div className='p-bottom-4 '></div>
      </div>
      <div className="lawyers-button">
       <a href="#" className='attorneyster-button3'>Free Consulting</a>
      </div>
    </div>

</div>
</div>
    </>
  )
}

export default Lawyers2