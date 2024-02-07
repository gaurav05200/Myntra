import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name:"bag",
  initialState:[],

  reducers:{
    addToBag:(state,actions)=>{
      state.push(actions.payload);
    },
    removeFromBag:(state,actions)=>{
      return state.filter(itemID => itemID !== actions.payload);
    }
  }
})

export const bagActions = bagSlice.actions;

export default bagSlice;