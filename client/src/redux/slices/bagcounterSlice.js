import { createSlice } from "@reduxjs/toolkit";

const bagcounterSlice= createSlice({
    name:'bagcounter',
    initialState:0,
    reducers: {
        increment: (state)=> state+1 ,
        decrement: (state)=>state-1,
    },
});
console.log(bagcounterSlice);

export const {increment, decrement} = bagcounterSlice.actions;
export default bagcounterSlice.reducer;