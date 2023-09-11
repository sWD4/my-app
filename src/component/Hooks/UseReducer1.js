import React, { useReducer } from 'react'

const reducer = (state, action) => {
 //console.log(state,action)
  //return state
  switch(action.type){
    case 'increment':
        return state+1
    case 'decrement':
        return state-1
    default:
        return state
  }
}

function UseReducer1() {
    const initialState = 0;
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h1>count:{state}</h1>
            <button onClick={() => dispatch({type:'increment'})}>INCREMENT Count</button>
            <button onClick={() => dispatch({type:'decrement'})}>DECREMENT Count</button>
            <br/><br/>
        </>
    )
}

export default UseReducer1