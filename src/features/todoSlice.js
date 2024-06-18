import { createSlice } from "@reduxjs/toolkit"

const defaultValue = []
export const todoSlice = createSlice({
    name: "todo",
    initialState : defaultValue,

})
export default todoSlice.reducer
