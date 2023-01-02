import React from 'react'
import Service1 from "./assets/course1.jpg"
import Service2 from "./assets/course2.jpg"
import Service3 from "./assets/course3.jpg"
import Service4 from "./assets/course4.jpg"
import Service5 from "./assets/course5.jpg"
import Servicecard from './servicecard'
import styled from 'styled-components'
function Service() {
  return (
  
<> 
<h3 className='common-heading'>
  Our Services
</h3>
<Wrap>
    
   
    
    <Servicecard
    image = {Service1}
    description = "HTML and CSS course"

    />
     <Servicecard
    image = {Service2}
    description = "HTML , CSS , JS course"

    />
    
    <Servicecard
    image = {Service3}
    description = "Javascript complete course"

    />
     <Servicecard
    image = {Service4}
    description = "Reactjs course"

    />
     <Servicecard
    image = {Service5}
    description = "MERN Stack course"

    />
  </Wrap>
</>
  )
}

const Wrap = styled.div`
display : flex;
justify-content : center;
flex-wrap : wrap;
gap : 50px;



`

export default Service
