import React from 'react'
import "./Product.css"
function Product(props) {

  
    return (
      props.price > 90 && 
      <div>
          <h2>Product Card</h2>
          <div className='card'>
              <img src={props.image}/>
              <h1>{props.title}</h1>
              <p className='price'>${props.price}</p>
              <p>It is the best smart phone for 2021 It is the best smart phone for 2021</p>
              <p><button>Add To Cart</button></p>
          </div>
      </div>
    )
  }



export default Product