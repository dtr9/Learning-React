import {createSlice} from '@reduxjs/toolkit'

const shirtcounterSlice=createSlice({
    name: 'shirtcounter',
    initialState: 0,
    reducers:{
        increment:(state)=>state+1,
        decrement:(state)=>state-1,
    }
});
console.log(shirtcounterSlice);
export const {increment, decrement} = shirtcounterSlice.actions;
export default shirtcounterSlice.reducer;