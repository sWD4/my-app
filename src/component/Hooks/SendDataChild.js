import React from 'react'

function SendDataChild(props) {
    // console.log(props)

    const data = {name: 'ram', email:'ram@gmail.com'}
  return (
    <>
      {/* <h1>{props.data}</h1> */}
      <button onClick={()=>{props.alert(data)}}>Send Data</button>
    </>
  )
}

export default SendDataChild