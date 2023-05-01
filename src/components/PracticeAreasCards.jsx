import React from 'react'
import PracticeAreas from './PracticeAreas'
import KartMelumatlari from '../practiceareasInfo.json'

const PracticeAreasCards = () => {
  return (
    <div className="practice-areas-laW ">
    <div className="prc-ars-law123 row">
      {
         KartMelumatlari.map(melumat => (
            <PracticeAreas  kartinBasligi1={melumat.kartinBasligi} kartinMetni1={melumat.kartinMetni} kartinShekli1={melumat.kartinShekli} kartinButonu1={melumat.kartinButonu}/>
         ))
      }

    </div>
    </div>
  )
}

export default PracticeAreasCards