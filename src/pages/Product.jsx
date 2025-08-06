import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrum/Breadcrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams(); //Return key-value pair Object of that current URL.
  const product = all_product.find((e) => e.id === Number(productId)); // Convert productId(string) into number.
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product