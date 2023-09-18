//simply usereducer manages the states
import React, { useState } from 'react'
import UseReducer1 from './UseReducer1';

function UseReducer() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Use Reducer</h1>
            <h2>Count:{count}</h2>
            <button onClick={() => setCount(count + 1)}>INCREMENT Count</button>
            <button onClick={() => setCount(count - 1)}>DECREMENT Count</button>
            <br /><br />
            <UseReducer1 />
            
        </>
    )
}

export default UseReducer