import { createSlice } from "@reduxjs/toolkit"

const defaultValue = []
export const todoSlice = createSlice({
    name: "todo",
    initialState : defaultValue,
reducers:{
    add(state) => {
        const newTask ={}
        state.push(newTask)
        return state
    },
    remove () => {},
    update () => {},
    clearAll() => defaultValue,
}
})
export default todoSlice.reducer
