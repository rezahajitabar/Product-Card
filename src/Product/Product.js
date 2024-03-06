import React from 'react'
import "./Product.css"
function Product({image,title:ProductTitle,price}) {

  let title='Product Card'
    return (
    
      <div>
          <h2>{title}</h2>
          <div className='card'>
              <img src={image}/>
              <h1>{ProductTitle}</h1>
              <p className='price'>${price}</p>
              <p>It is the best smart phone for 2021 It is the best smart phone for 2021</p>
              <p><button>Add To Cart</button></p>
          </div>
      </div>
    )
  }



export default Product