import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function counter() {
  const dispatch=useDispatch();
  const count=useSelector((state)=>state.counter.count)
  return (
<>
    <div ><button onClick={()=>dispatch({type:"increment"})}>+</button>
    <h1>{count}</h1>
    <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    <button onClick={()=>dispatch({type:"reset"})}>Reset</button></div>
</>  )
}

export default counter