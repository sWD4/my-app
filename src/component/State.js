import React, { useState } from 'react'

function State() {
    const[data, setdate] = useState('Shubham')
    function updatedata(){
        setdate('raj')
    }
    console.log('hello state')
  return (
    <>
     <h1>hello {data}</h1>
     <button onClick={updatedata}>click</button>
    </>
  )
}

export default State