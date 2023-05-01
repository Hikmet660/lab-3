import React from 'react'
import '../components/RecentBlogs.css'
import Recent1 from '../assets/images/Reviews.svg'
import Recent2 from '../assets/images/RecentBlogs.svg'
import CorporateLaww from '../assets/images/CorporateLaw.svg'
import LegalAdvicee from '../assets/images/LegalAdvice.svg'
import SocialJusticee from '../assets/images/SocialJustice.svg'
import CorporateLaww2 from '../assets/images/CorporateLaw2.svg'
import LegalAdvicee2 from '../assets/images/LegalAdvicee2.svg'
import SocialJusticee2 from '../assets/images/SocialJusticee2.svg'
const RecentBlogs = () => {
  return (
    <>
    <div className="recent-blogs">
        <div className="recent-blogs-1">
              <h1>Recent Blogs</h1>
              <img src={Recent1} alt="" />
        </div>

    <div className="recent-blogs-left-right">
    <div className="recent-blogs-left-img">
            <img src={Recent2} alt="" />
    </div>
 <div className="recent-blogs-right-side">
    <div className="corporateLaw">
        <p>Corporate Law</p>
        <p>|</p>
        <p>Friday, February 4, 2022</p>
    </div>

    <div className="recent-blogs-bottom"></div>

    <div className="recent-blogs-h1-p-link attorneyster-view-link">
         <h1>The Difference between Information & Legal Advice</h1>
         <p>Collaborative on low-hanging fruit to identify a ballpark value added activity to beta matrix economically test override the digital.</p>
         <a href="#">View More</a>
    </div>
   
 </div>
</div>
 <div className="recent-blogs-top-bottom"></div>
    </div>

    
      <div className="view-more123">
     <div className="view-more-1">
           <div className="view-more-law">
                <div className="view-more-law-img">
                  <img src={CorporateLaww} alt="" />
                </div>
                <div className="view-more-law-2 color-font ">
                  <p>Corporate Law</p>
                  <p>|</p>
                  <p>Friday, February 4, 2022</p>
                </div>

                <div className="view-more-law-h-p-link1 color-h-p-font attorneyster-view-link">
                   <h3>How to Tell Who Is at Fault in a Car Accident</h3>
                   <p>Capitalize on low-hanging fruit to identify a ballpark value added matrix economically activity to beta test override the digital.</p>
                   <a href="#">View More</a>
                </div>
          </div>
          
          <div className="view-more-law">
                <div className="view-more-law-img">
                  <img src={LegalAdvicee} alt="" />
                </div>
                <div className="view-more-law-2 color-font ">
                  <p>Legal Advice</p>
                  <p>|</p>
                  <p>Friday, February 4, 2022</p>
                </div>

                <div className="view-more-law-h-p-link2 color-h-p-font attorneyster-view-link">
                   <h3>When Sue Outside of Workers’ Compensation</h3>
                   <p>Strategies on low-hanging fruit to identify a ballpark value added activity matrix economically to beta test override the digital.</p>
                   <a href="#">View More</a>
                </div>
          </div>

          <div className="view-more-law">
                <div className="view-more-law-img">
                  <img src={SocialJusticee} alt="" />
                </div>
                <div className="view-more-law-2 color-font ">
                  <p>Social Justice</p>
                  <p>|</p>
                  <p>Friday, February 4, 2022</p>
                </div>

                <div className="view-more-law-h-p-link3 color-h-p-font attorneyster-view-link">
                   <h3>Social Media Postings Lead to Defense Verdict</h3>
                   <p>Collaborative on low-hanging fruit to identify a ballpark value added activity to beta matrix economically test override the digital.</p>
                   <a href="#">View More</a>
                </div>
          </div>
       </div>
     <div className="view-more-2">
         <div className="view-more-law">
                <div className="view-more-law-img">
                  <img src={CorporateLaww2} alt="" />
                </div>
                <div className="view-more-law-2 color-font ">
                  <p>Corporate Law</p>
                  <p>|</p>
                  <p>Friday, February 4, 2022</p>
                </div>

                <div className="view-more-law-h-p-link4 color-h-p-font attorneyster-view-link">
                   <h3>Riding solo to the rescue of her beloved nonprofits</h3>
                   <p>Podcasting on low-hanging fruit to identify a ballpark value added activity to beta test override matrix economically the digital.</p>
                   <a href="#">View More</a>
                </div>
          </div>

          <div className="view-more-law">
                <div className="view-more-law-img">
                  <img src={LegalAdvicee2} alt="" />
                </div>
                <div className="view-more-law-2 color-font ">
                  <p>Legal Advice</p>
                  <p>|</p>
                  <p>Friday, February 4, 2022</p>
                </div>

                <div className="view-more-law-h-p-link5 color-h-p-font attorneyster-view-link">
                   <h3>Case Filed on Behalf of Injured Tugboat Worker</h3>
                   <p>Efficiently on low-hanging fruit to identify a ballpark value added activity to beta test matrix economically override the digital.</p>
                   <a href="#">View More</a>
                </div>
          </div>
          
          <div className="view-more-law">
                <div className="view-more-law-img">
                  <img src={SocialJusticee2} alt="" />
                </div>
                <div className="view-more-law-2 color-font ">
                  <p>Social Justice</p>
                  <p>|</p>
                  <p>Friday, February 4, 2022</p>
                </div>

                <div className="view-more-law-h-p-link6 color-h-p-font attorneyster-view-link">
                   <h3>How Companies Choose Legal Representation</h3>
                   <p>Objectively on low-hanging fruit to identify a ballpark value added activity to beta matrix economically test override the digital.</p>
                   <a href="#">View More</a>
                </div>
          </div>
        </div>
         
      </div>
    </>
  )
}

export default RecentBlogs