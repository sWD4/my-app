import React,{forwardRef} from 'react'

function ForwardRef(props,ref) {

  return (
    <>
    <h1>ForwardRef</h1>
    <input ref={ref} type='text'/>
    </>
  )
}

export default forwardRef(ForwardRef)