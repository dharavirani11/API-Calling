import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"


const initialState = {
  cartdata : [],
  priceOfItem:0,
  showcart:0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTocart: (state,action) => {
    
      state.cartdata.push(action.payload)
    },
    piece: (state,action) =>{
      state.priceOfItem += parseInt(action.payload.item.price)
    },
    cartItem:(state,action)=>{
      state.showcart +=  parseInt(action.payload)
    }
    

  },
})

export const { addTocart,piece,cartItem } = counterSlice.actions

export default counterSlice.reducer