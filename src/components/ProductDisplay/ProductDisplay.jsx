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
        {/* PRICE OF PRODUCT */}
        <div className="productDisplay-right-prices">
            <div className="productDisplay-right-old-price">${product.old_price}</div>
            <div className="productDisplay-right-new-price">${product.new_price}</div>
        </div>
        {/* DESCRIPTION OF PRODUCT*/}
        <div className="productDisplay-right-description">
            A rounded neck fullsleeve shirt with printed Deathnote anime.
        </div>
        {/* SIZE OF THE PRODUCT */}
        <div className="productDisplay-right-size">
            <h1>Select Size</h1>
            <div className="productDisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            <button>ADD TO CART</button>
            {/* TAGS AND CATEGORY OF PRODUCT */}
            <p className="productDisplay-right-category">
                <span>Category :</span>Men, Shirt </p>
            <p className="productDisplay-right-category">
                <span>Tags :</span>moderate, latest </p>
        </div>
    </div>
    </div>
  )
}

export default ProductDisplay