import { createSlice } from "@reduxjs/toolkit";
import { items } from "../data/items";


const itemSlice = createSlice({
  name: "items",
  initialState: items,

  reducers: {
    addInitialItem: (state, actions) => {
      return actions.payload;
    },
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice;
