import React from 'react'
import styled from 'styled-components'
import { Button } from './styles/button'
function Contact() {
  return (
    <Wrapper>
      <h3 className="common-heading">
        Feel Free To Contact Us
      </h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57929.23355645912!2d67.01519255!3d24.8441321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e70a31f45a9%3A0x25e252450977ec12!2sSaddar%20Town%2C%20Karachi%2C%20Sindh!5e0!3m2!1sen!2s!4v1672446021560!5m2!1sen!2s"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">

      </iframe>
      <div className="container">
        <div className="contact-form">
        <form action="https://formspree.io/f/xlekerop" method='POST' className='contact-inputs'>
        <input
          type="text"
          name='username'
          placeholder='username'
          
          required />

        <input type="email"
          name="email"
          placeholder='email'
          required />

          <textarea name="message"  cols="30" rows="6" required></textarea>
         <input type="submit" value="send" className='btn' />
      </form>
        </div>
      </div>
      
    </Wrapper>

  )
}

const Wrapper = styled.div`
padding: 9rem 0 5rem 0;
.container {
  margin-top: 6rem;
  text-align: center;
  .contact-form {
    max-width: 50rem;
    margin: auto;
    .contact-inputs {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 3rem;
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        color : white;
        background-color : #6254F3;
        width : 100px;
        padding : 10px;
        border-radius : 10px;
        border: 2px solid ${({ theme }) => theme.colors.btn};
        &:hover {
          background-color: rgb(0 0 0 /0%);
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
`

export default Contact
