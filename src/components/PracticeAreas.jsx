import React from 'react'
import '../components/PracticeAreas.css'
const PracticeAreas = ({kartinBasligi1, kartinMetni1, kartinShekli1, kartinButonu1}) => {
  return (
    <>
      <div className="prc-ars-lawww prc-ars-lw12 ">
        <div className="prc-ars-lw1">
          <h1>{kartinBasligi1}</h1>
          <p>{kartinMetni1}</p>
        </div>
        <div className="prc-ars-lw2">
          <div className="prc-ars-lw2-img">
        <img src={kartinShekli1} alt="" />
          </div>
          <div className="prc-ars-lw2-button">
            <a href="#" className='practice-areas-button'>{kartinButonu1}</a>
          </div>
        </div>
     </div>
    </>

  )
}

export default PracticeAreas