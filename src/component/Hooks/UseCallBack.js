import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

function UseCallBack() {
  const [count, setCount] = useState(0)
  console.log('parent render')
  //example two
  const [count1, setCount1] = useState(0)

  const IncrementCount = useCallback(() => {
    // setCount1((prevCount) => prevCount + 1)
    console.log('use call back hook')
  },[])

  // const IncrementCount = ()=>{
  //   console.log('hello')
  // }

  return (
    <>
      <h1>UseCallBack</h1>
      <h2>count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <br></br><br />
      <h2>count1:{count1}</h2>
      <ChildComponent increment={IncrementCount} />
    </>
  )
}

export default UseCallBack