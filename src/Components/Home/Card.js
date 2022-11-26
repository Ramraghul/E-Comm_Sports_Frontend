import React from 'react'
import { Link } from 'react-router-dom'

function Card({ item, handleToCart, value }) {
  return (
    <>
      <div className='cards'>
        <div className="Products">
          <div class="sizes">
            <div class="Topics">
              <div class="imagebx">
                <img src={item.imgUrl} alt='Product'/>
              </div>
              <div class="contentBox">
                <h3>{item.title}<br/><span>Price : {item.price}</span></h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <button disabled={value.some((obj)=>obj._id===item._id)} onClick={()=>handleToCart(item)}  className='btn btn-lg btn-outline-success'>Add</button>
              </li>
              <li>
              </li>
              <li>
                <Link to={`/viewproduct/${item._id}`} state={{ item }} className='btn btn-outline-warning views'>View</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card