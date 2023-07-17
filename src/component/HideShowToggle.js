import React, { useState } from 'react'

function HideShowToggle() {
    const[status,setstatus] = useState(true)
  return (
   <>
    {
      status? <h1>shubham sharma</h1>:null
    }
    <button onClick={()=>setstatus(false)} className='btn btn-info'>Hide</button>
    <button onClick={()=>setstatus(true)} className='btn btn-danger'>Show</button>
    <button onClick={()=>setstatus(!status)} className='btn btn-primary'>Toggle</button>
   </>
  )
}

export default HideShowToggle