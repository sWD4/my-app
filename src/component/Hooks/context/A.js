import React from 'react'
import B from './B'
function A() {
    const data = 'shubham sharma'
  return (
    <>
    <h1>A component</h1>
    <B data = {data}/>
    </>
  )
}

export default A