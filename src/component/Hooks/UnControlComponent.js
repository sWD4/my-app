import React, { useRef } from 'react'

function UnControlComponent() {
    let inputRef = useRef(null)
    let inputRef2 = useRef(null)
    function submitForm(e){
        e.preventDefault()
        console.log('First Input Value: ',inputRef.current.value)
        console.log('Second Input Value: ',inputRef2.current.value)
        let input3 =document.getElementById("input3").value;
        console.log("input value",input3)
    }
  return (
    <>
    <h1>UnControlComponent</h1>
    <form onSubmit={submitForm}>
        <input type='text' ref={inputRef}/>
        <input type='text' ref={inputRef2}/>
        <input type='text' id='input3'/>
        <button>submit</button>
    </form>
    </>
  )
}

export default UnControlComponent