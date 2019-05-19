import React, { Component } from 'react'
import './Input.scss'

export default class Input extends Component {
  render() {
    return (
      <div className='inputArea'>
        First Name: <input type="text"/>
      </div>
    )
  }
}
