import React, { useState } from 'react'

function ControlComponent() {
    const[inputvalue, setinputvalue] = useState()
    const handleChange = (event)=>{
        setinputvalue(event.target.value)
        console.log(inputvalue)
    }
  return (
    <>
    <h1>control component</h1>
    <input type='text' value={inputvalue} onChange={handleChange}/>
    <h2>current value:{inputvalue}</h2>
    </>
  )
}

export default ControlComponent