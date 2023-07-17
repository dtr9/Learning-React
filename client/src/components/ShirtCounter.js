import React from 'react'
import {increment, decrement} from '../redux/slices/shirtcounterSlice.js'
import { useSelector,useDispatch } from 'react-redux'
const ShirtCounter = () => {
    const shirtcount=useSelector((state)=>state.shirtcounter);
    const dispatch=useDispatch();
  return (
    <div className='shirtcountercard'>
        <h1>ShirtCounter</h1>
        <h3>Shirt Count : {shirtcount}</h3>
        <button onClick={()=> dispatch(increment())}>Increment Shirt Count</button>
        <button onClick={()=> dispatch(decrement())}>Decrement Shirt Count</button>

    </div>
    
  )
}

export default ShirtCounter