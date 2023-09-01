import React,{useRef} from 'react'

function UseRef() {
    let inputRef = useRef(null)
    function controlInput(){
        inputRef.current.value = 'shubham sharma'
        inputRef.current.focus()
        inputRef.current.style.color = 'red'
        inputRef.current.style.backgroundColor = 'black'
    }
  return (
    <>
    <h1>use ref</h1>
    <input type = 'text' ref={inputRef}/>
    <button onClick={controlInput}>handle input</button>
    </>
  )
}

export default UseRef