import React, { Component } from 'react'

class Cstate extends Component {
    constructor(){
         super()
        this.state = {
            name: 'shubham'
        }
    }
    updateData(){
        this.setState({name:'rahul'})
    }
  render() {
    
    return (
      <>
       <h1>{this.state.name}</h1>
       <button onClick={()=>this.updateData()}>clickme</button>
      </>
    )
  }
}

export default Cstate
