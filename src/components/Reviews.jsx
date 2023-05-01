import React from 'react'
import '../components/Reviews.css'
import Reviewsss from '../assets/images/Reviews.svg'
import Reviewsss2 from '../assets/images/Reviews2.svg'
import ReviewsImg from '../assets/images/Natasha.svg'
import ReviewsImg2 from '../assets/images/Hannah.svg'
import ReviewsImg3 from '../assets/images/Phillip.svg'
import ReviewsImg4 from '../assets/images/Joshua.svg'
const Reviews = () => {
  return (
    <>
      <div className="options">
        <div className="reviews">
          <h1>Client Opinions & Reviews</h1>
          <img src={Reviewsss} alt="" />
        </div>

        <div className="options-1">

          <div className="private-employee">

            <div className="private-employee-1 options11">
              <img src={Reviewsss2} alt="" />
              <p>Could you please thank Paul personally for me, the stars are for his forehead. The perfect way of handling the case based on the situation.</p>
            </div>
            <div className="private-employee-2">
              <div className="private-employee-img options-img">
              <img src={ReviewsImg} alt="" />
              </div>
              <div className="private-employee-h-p options-h-p">
                <h3>Natasha </h3>
                <p>Private Employee</p>
              </div>
            </div>
          </div>
          <div className="business-sector">
            <div className="business-sector-1 options-img-h-p">
              <div className="business-sector-img options-img">
              <img src={ReviewsImg2} alt="" />
              </div>
              <div className="business-sector-h-p options-h-p">
                <h3>Hannah Butler </h3>
                <p>Business Sector</p>
              </div>
            </div>
            <div className="business-sector-2 options11">
              <img src={Reviewsss2} alt="" />
              <p>Attorney law firm really helped me with all my family law and custody issues at the right time. Words are not enough to thank the firm.</p>
            </div>
          </div>

          <div className="bus-driver">

            <div className="bus-driver-1 options11">
              <img src={Reviewsss2} alt="" />
              <p>Thank you for the way in which your team handling the matter on a perfect way. They give me a big relief in this case with more confident.</p>
            </div>
            <div className="bus-driver-2">
              <div className="bus-driver-img options-img">
              <img src={ReviewsImg3} alt="" />
              </div>
              <div className="bus-driver-h-p options-h-p">
                <h3>Phillip Arnold</h3>
                <p>Bus Driver</p>
              </div>
            </div>
          </div>

          <div className="private-engineer">
            <div className="private-engineer-1 options-img-h-p">
            <div className="private-engineer-img options-img ">
              <img src={ReviewsImg4} alt="" />
              </div>
              <div className="private-engineer-h-p options-h-p">
                <h3>Joshua Warren</h3>
                <p>Private Engineer</p>
              </div>
            </div>
            <div className="private-engineer-2 options11">
              <img src={Reviewsss2} alt="" />
              <p>I frequently check the Best Lawyers list to select an attorney in areas too familiar with at the end they came and lead to achive the justice.</p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Reviews