import { createGlobalStyle } from "styled-components";

import React from 'react'

const Globalstyle = createGlobalStyle `
*{
    margin :0;
    padding : 0 ;
    box-sizzing : border-box;
    font-family: 'Work Sans', sans-serif;
}
html{
    font-size : 62.5%;
    overflow-x : hidden;
}
body{
    overflow-x : hidden;
}

h1{
colors : ${({theme})=> theme.colors.heading};
    font-size : 16px;
    font-weight : 900;
}

h2
{
    color: ${({ theme }) => theme.colors.heading};
    font-size: 4.4rem;
    font-weight: 300;
    white-space: normal;
    text-align: center;
}
h3
{
    font-size: 1.8rem;
    font-weight : 400;
}
p
{
    color: ${({ theme }) => theme.colors.text};
    opacity: .7;
    font-size: 1.65 rem;
    line-height: 1.5;
    margin-top: 1rem;
    font-weight: 400;
    font-size : 16px;
}
a
{
    text-decoration: none;
}
li
{
    list-style:none;
}
`
 

export default Globalstyle
