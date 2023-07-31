import React, { useState } from 'react'

function Condition() {
    const[login,setlogin] = useState()
  return (
    <>
    {
        login == 1?
        <h1>Welcome user one</h1>
        :login == 2? <h1>Welcome User two</h1>
        :<h1>welcome user three</h1>
    }
    </>
  )
}

export default Condition