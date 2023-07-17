import React, { useState, useEffect } from 'react'

function FirstComponent() {
  const [a,setA]=useState(15);
  const onClickHandler=()=>{
    setA(prevA=>prevA+2);
  }
  useEffect(()=>{
    console.log("value of a is ",a)
  },[a])
  return (
    <>
    <div className='firstcomponent'>
        <div>FirstComponent</div>
        <div>
            <h1>value is {a}</h1>
            <button onClick={onClickHandler}>Increase</button>
        </div>
    </div>
    </>
  )
}

export default FirstComponent;