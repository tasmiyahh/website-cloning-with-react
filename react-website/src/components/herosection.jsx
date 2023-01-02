import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../styles/button'
import Image from "../assets/hero.jpg"
function Herosection({name , image}) {
  return (
    <div>
      <Wrapper>
        <div className='herosection'>
        <div className="container grid grid-two-column">
           <div className="section-hero-data">
            <p className='hero-top-data'></p>
            <h1 className='hero-heading'>{name} </h1>
            <p className='hero-para'>Iam a WebDeveloper. I learned html, <br />css ,Bootstrap ,Js , 
             react.js , <br /> MongnoDb , Express.js  , node.js </p>
            <Button className="btn hireme-btn">
                <Link to="/contact">Hire me</Link>
            </Button>
        </div>
        <div >
          <img src={image} alt="" className="section-hero-image" />
        </div>
        </div>
        </div>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
.herosection{
  display : flex;
  flex-direction : column;
  align-items : center;
  flex-wrap : wrap;

}

.container{
  display : flex;
  flex:wrap;
  gap : 20px;
}

.hero-heading{
  font-size : 50px;
}
.hero-para{
  font-size : 15px;
  margin-bottom : 30px
}
.section-hero-image{
  width : 300px;
   height :300px;
}


@media only screen and (max-width: 600px) {
  .container{
    display : flex;
    flex:wrap;
    flex-direction : column;
    gap : 20px;
  }
  .section-hero-image{
    width : 200px;
     height :200px;
  }
  
  
}


`

export default Herosection
