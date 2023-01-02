import React from 'react'

import image2 from "./assets/hero.jpg"
import Herosection from './components/herosection'
function About() {
  const data = {
    name : "Tasmiyah" ,
    image : image2
  }
  return (
    <div>
      <Herosection {...data}/>
    </div>
  )
}

export default About
