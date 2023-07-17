import React, { useState } from 'react'

function State1() {
    const[count,setcount] = useState(0)
  return (
    <>
    <h1>count:{count}</h1>
    <button onClick={()=>setcount(count+1)}>click me</button>
    </>
  )
}

export default State1