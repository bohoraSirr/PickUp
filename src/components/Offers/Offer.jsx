import React from 'react'
import exclusive_img from '../Assets/Frontend_Assets/exclusive_image.png'
import './Offer.css'

const Offer = () => {
  return (
    <div className='offers'>
        <div className="offer-left">
            <h1>EXCLUSIVE</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check now</button>
        </div>
        <div className="offer-right">
          <img src={exclusive_img} alt="" />
        </div>
    </div>
  )
}

export default Offer