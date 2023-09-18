import React, { createContext } from 'react'
import Child1 from './Child1'

const myContext = createContext()

function UseContext() {
    const data = 'shubham sharma'
    return (
        <>
            <h1>Use context</h1>
            <myContext.Provider value={data}>
                <Child1 />
            </myContext.Provider>

        </>
    )
}

export default UseContext
export {myContext}