import React from 'react'
import './newsletter.css';
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on your Email</h1>
        <p>Subscribe  to our news letter amd stay updated</p>
        <div>
            <input type='email' placeholder='Your Email id'/>
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
