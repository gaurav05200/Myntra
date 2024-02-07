import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./bagSlice";

import itemSlice from "./itemSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    bag: bagSlice.reducer,
  },
});
export default myntraStore;
