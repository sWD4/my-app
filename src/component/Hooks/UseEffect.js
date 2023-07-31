import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count , setCount] = useState(0)
    useEffect(()=>{
        console.log('use effect')
    },[])
    console.log('hello render')
  return (
    <>
    <h1>User Effect {count} </h1>
    <button onClick={()=>setCount(count+1)}>Update Counter</button>
    </>
  )
}

export default UseEffect