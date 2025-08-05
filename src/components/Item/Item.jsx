import React from 'react'
import './Item.css'

// Here Later we will call a API which will give us a json format data(in object) and from there we will call props(simply a naming convention for argument) and its required key-value pair. In such way we access the data from a API/backend server.
const Item = (props) => {
  return (
    <div className="item">
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item