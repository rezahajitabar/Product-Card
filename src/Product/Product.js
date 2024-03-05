import React from 'react'
import "./Product.css"
function Product() {
  return (
    <div>
        <h2>Product Card</h2>
        <div className='card'>
            <img src='logo192.png'/>
            <h1>samsung A51</h1>
            <p className='price'>$300</p>
            <p>It is the best smart phone for 2021 It is the best smart phone for 2021</p>
            <p><button>Add To Cart</button></p>
        </div>
    </div>
  )
}

export default Product