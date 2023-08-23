import React from 'react'

function ReuseComponent(props) {
    console.log(props)
  return (
    <>
    <h1>hello</h1>
    <span>{props.data.name}</span>
    <span>{props.data.email}</span>
    <span>{props.data.phone}</span>
    </>
  )
}

export default ReuseComponent