import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTocart, piece} from './Store/CounterSlice'




function Cart() {
  const cartinfo = useSelector((state) => state.counter.cartdata)
  // console.log(cartinfo);
  const dispatch = useDispatch()
  var total=0

  const pricing = useSelector((state) => state.counter.priceOfItem)
  console.log(pricing)
 

  return (
    <>
    <div>
       {cartinfo.map((item) => {
        total += item.price
              return (
                <div key={item.id} className="head">
                  <div className="img">
                    <img src={item.thumbnail}></img>
                  </div>

                  <div className="u_body">
                    <div>
                      Brand : <span>{item.brand}</span>
                    </div>
                    <div>
                      Category : <span>{item.category}</span>
                    </div>
                    <div>
                      Title : <span>{item.title}</span>
                    </div>
                    <div>
                      Description :<span>{item.description} </span>
                    </div>
                    <div>
                      Price : <span>{item.price}</span>
                    </div>
                    <div>
                      Rating : <span>{item.rating}</span>
                    </div>
                    <div>
                      Stock : <span>{item.stock}</span>
                    </div>
                    <div>
                      Total : <span>{item.price}</span>
                    </div>
                  
                  </div>
                </div>
              );
            })}
    </div>
    <div>
      <h1>Total={total}</h1>
    </div>
    </>
  )
}
export default Cart;