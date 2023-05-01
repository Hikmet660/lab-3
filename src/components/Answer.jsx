import React from 'react'
import '../components/Answer.css'
import Answerrr from '../assets/images/Reviews.svg'
import AnswerImgg from '../assets/images/AnswerImg.svg'
import AnswerImg2 from '../assets/images/AnswerImg2.svg'
import AnswerImg3 from '../assets/images/AnswerImg3.svg'
import AnswerFacebook from '../assets/images/Facebook.svg'
import AnswerTwitter from '../assets/images/Twitter.svg'
import AnswerInstagram from '../assets/images/Instagram.svg'
import AnswerPinterest from '../assets/images/Pinterest.svg'
const Answer = () => {
  return (
    <>
    <div className="answer">

    <div className="answer-1">
    <h2>Our Experienced Attorney Are Ready<br />To answer Any Questions</h2>
    <img src={Answerrr} alt="" />
    </div>

<div className="answer-img-h-p">

    <div className="answer-img">

        <div className="answer-links-img">
            <div className="answer-img-1">
            <img src={AnswerImgg} alt=""  />
            </div>
            <div className="answer-links">
            <div className="answer-media">
                <a href="https://www.facebook.com/"><img src={AnswerFacebook} alt="" /></a>
                <a href="https://twitter.com/"><img src={AnswerTwitter} alt="" /></a>
                <a href="https://www.instagram.com/"><img src={AnswerInstagram} alt="" /></a>
                <a href="https://www.pinterest.com/"><img src={AnswerPinterest} alt="" /></a>
             </div>
             <div className="answer-media-bottom"></div>
             </div>
             </div>
            <div className="answer-h-p">
                  <h3>John Turner</h3>
                  <p>Civil Attorney</p>
            </div>
   </div>
        <div className="answer-img">
            <div className="answer-links-img">
            <div className="answer-img-1">
             <img src={AnswerImg2} alt="" />
             </div>
             <div className="answer-links">
             <div className="answer-media">
                <a href="https://www.facebook.com/"><img src={AnswerFacebook} alt="" /></a>
                <a href="https://twitter.com/"><img src={AnswerTwitter} alt="" /></a>
                <a href="https://www.instagram.com/"><img src={AnswerInstagram} alt="" /></a>
                <a href="https://www.pinterest.com/"><img src={AnswerPinterest} alt="" /></a>
             </div>
              <div className="answer-media-bottom"></div>
             </div>
             </div>
             <div className="answer-h-p">
                  <h3>Martha Black</h3>
                  <p>Associate Attorney</p>
             </div>
        </div>

    <div className="answer-img">
        <div className="answer-links-img">
        <div className="answer-img-1">
        <img src={AnswerImg3} alt="" />
        </div>
        <div className="answer-links">
        <div className="answer-media">
                <a href="https://www.facebook.com/"><img src={AnswerFacebook} alt="" /></a>
                <a href="https://twitter.com/"><img src={AnswerTwitter} alt="" /></a>
                <a href="https://www.instagram.com/"><img src={AnswerInstagram} alt="" /></a>
                <a href="https://www.pinterest.com/"><img src={AnswerPinterest} alt="" /></a>
             </div>
               <div className="answer-media-bottom">
             </div>
             </div>
               </div>
           <div className="answer-h-p">
              <h3>Brian Gomez</h3>
              <p>Titular Attorney</p>
            </div>
    </div>
    
    </div>
  </div>

    </>
  )
}

export default Answer