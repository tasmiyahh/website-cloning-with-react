import React from 'react'
import Herosection from './components/herosection'
import image from "./assets/hero2.jpg"
function Home() {
  const data = {
    name : "Tasmiyah"  ,
    image : image
  }
  return (
    <div>
      <Herosection {...data}/>
      
    </div>
  )
}

export default Home
