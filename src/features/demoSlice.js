import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initalValue = 0;
const demoSlice = createSlice({
     name:"demo",
     initialState : initalValue,
     reducers:{
        increment : (state) => state +1,
        decrement : (state) => state -1,
     }

})
export const{increment,decrement} = demoSlice.actions
export default demoSlice.reducer;