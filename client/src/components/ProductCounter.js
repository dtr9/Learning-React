import React from 'react'
import { increment,decrement } from '../redux/slices/counterSlice'
import {useSelector,useDispatch} from 'react-redux'
const ProductCounter = () => {
    const productCount=useSelector((state)=>state.counter);
    const dispatch= useDispatch();
  return (
    <div className='productCounter'>
        <h1>ProductCounter</h1>
        <h3> Product count : {productCount}</h3>
        <button onClick={()=>{dispatch(increment())}}>Increase Product Count</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrease Product Count</button>
    </div>
    
  )
}

export default ProductCounter