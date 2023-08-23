import React, { useState,useMemo } from 'react'

function UseMemo() {
    const[count,setcount] = useState(0)
    const[item,setitem] = useState(10)

    // function multicount(){
    //     console.log('multicount')
    //     return count*5
    // }
  return (
    <>
     <h1>use memo hooks</h1>
     <h1>hooks in react: {count}</h1>
     <h1>hooks in item: {item}</h1>
     {/* <h2>{multicount()}</h2> */}
     <button onClick={()=>setcount(count+1)}>Update count</button>
     <button onClick={()=>setitem(item*10)}>update item</button>
    </>
  )
}

export default UseMemo