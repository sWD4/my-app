import React from 'react'
import D from './D'
function C(props) {
  return (
    <>
    <h1>C component {props.data}</h1>
    <D data = {props.data}/>
    </>
  )
}

export default C