import React from 'react'

function Click() {
    let name = 'shubham'
    function hello(a){
        name = a
        alert(name)
    }
// component ke ander hum variable ko update nahi kar sakte
    console.log('hello gwl')
  return (
    <>
   <h1>hello {name}</h1>
   <button onClick={hello()}>update</button>
   <button onClick={()=>hello('Raj')}>Click me</button>
    </>
  )
}

export default Click