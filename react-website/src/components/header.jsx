import React from 'react'
import Logo from "../assets/logo2.png"
import Nav from './Navbar';
import {
    BrowserRouter as Router,
   Routes,
    Route,
    Link
  } from "react-router-dom";
import styled from 'styled-components';
function Header() {
  return (
    <div>
    <MainHeader>
        <Link to="/">
        <img src={Logo} className="logo" alt="" />
        </Link>
        <Nav/>
    </MainHeader>
    </div>
  )
}

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 8rem;
background-color: ${({theme})=>theme.colors.bg};
 display:flex;
 justify-content: space-between;
align-items: center;
.logo{
  height:auto;
  width:25%;
}
`

export default Header
