import React from 'react'
import './descriptionBox.css';
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that faciliatates and buying and selling of products or services over the internet serves as a virtual marketplace where business and individual can
            showcase their products,interact with customers,and conduct transcations without the need for a physical presence.
            E-commerce websites have gained immense popularity due to their convience accessibility, and the global reach they offer.
        </p>
        <p>
            E-commerce websites typically display products or services with an detailed descriptions,images,prices and any available variations (e.g sizes,colors).Each product usually has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
