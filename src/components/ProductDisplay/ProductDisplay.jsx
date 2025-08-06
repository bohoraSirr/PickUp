import React from 'react'
import './ProductDisplay.css'
import start_icon from '../Assets/Frontend_Assets/star_icon.png'
import start_dull_icon from '../Assets/Frontend_Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        {/* LEFT SIDE OF THE PRODUCT DISPLAY */}
    <div className="productdisplay-left">
        <div className="productdisplay-image-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-image">
            {/* MAIN IMAGE OF THE SELECTED PRODUCT */}
            <div className="productdisplay-main-image">
                <img src={product.image} alt="" />
            </div>
        </div>
    </div>
    {/* RIGHT SIDE OF THE PRODUCT DISPLAY */}
    <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_dull_icon} alt="" />
        <p>(122)</p>
        </div>
    </div>
    </div>
  )
}

export default ProductDisplay