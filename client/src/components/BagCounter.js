import React from 'react'
import {increment, decrement} from '../redux/slices/bagcounterSlice'
import {useSelector, useDispatch} from 'react-redux'


const BagCounter = () => {
    const bagcount=useSelector((state)=>state.bagcounter)
    const dispatch=useDispatch();
    return (
    <div className="bagcountercard">
        <h1>BagCounter</h1>
        <h4>Bag Count : {bagcount}</h4>
        <button onClick={()=>dispatch(increment())}>Increment Bag Count</button>
        <button onClick={()=>dispatch(decrement())}>Decrement Bag Count</button>
    </div>
    
  )
}

export default BagCounter;