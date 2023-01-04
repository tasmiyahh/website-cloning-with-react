import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CgMenu, CgClose } from "react-icons/cg";

function Nav() {

  const [openMenu , setOpenmenu] = useState(false)
  const Nav = styled.nav`

  .navbar-list {
    display: flex;
    gap: 4.8rem;
    li {
      list-style: none;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }
  .mobile-navbar-btn {
    display: none;
    .close-outline {
      display: none;
      margin-top: -6.5rem;
    }
  }
  .mobile-navbar-btn[name="close-outline"] {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
      border: ${({ theme }) => theme.colors.black};
      .mobile-nav-icon {
        font-size: 4rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }
    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      transform: translateX(100%);
      li {
        &.navbar-link {
          &:link,
          &:visited {
            font-size: 4.2rem;
          }
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
    .active .mobile-nav-icon {
      display: none;
      font-size: 4rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 999;
    }
    .active .close-outline {
      display: inline-block;
    }
    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
    }
  }

   
    `

    
  return (


    <Nav>
    {/* <div className="menuIcon active"> */}
    {/* ////for close &menu btn */}
    <div className={openMenu ? "menuIcon active" : "menuIcon"}>
      <ul className="navbar-list">
        <li >
          <Link className="navbar-link"  to="/">
        
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/about"
           >
            About
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/service"
         >
            Services
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* mobile-navbar-button */}
      <div className="mobile-navbar-btn">
        <CgMenu
          name="menu-outline"
          className="mobile-nav-icon"
          onClick={() => setOpenmenu(true)}
          
        />
        <CgClose
          name="close-outline"
          className="close-outline mobile-nav-icon"
          onClick={() => setOpenmenu(false)}
          
        />
      </div>
    </div>
  </Nav>
  )
}

export default Nav
