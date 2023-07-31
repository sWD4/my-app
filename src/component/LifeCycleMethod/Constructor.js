import React, { Component } from 'react'

export default class Constructor extends Component {
    constructor(){
        console.log('hello')
        super()
        this.state = {
            date:'ram'
        }
    }
  render() {
    console.log('hello render')
    return (
      <>
       <h1>hello { this.state.data}</h1>
      </>
    )
  }
}
