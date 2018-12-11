import React, { Component } from 'react'
import ReactJsonDynamicForms from 'react-json-dynamic-forms'
import metaData from './metaData'
import './index.css'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elements: [
        { id: 0, type: 'firstName', value: 'Bruce'},
        { id: 1, type: 'lastName', value: 'Lee'},
        { id: 2, type: 'age', value: '18'},
        { id: 3, type: 'dob'},
        { id: 4, type: 'gender'},
        { id: 5, type: 'hobbies'},
      ]
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(elements) {
    this.setState({ elements: elements })
  }
  render() {
    return (
    <ReactJsonDynamicForms
      elements={this.state.elements}
      onChange={this.onChange}
      metaData={metaData}
      className='reactform'
    />)
  }
}

App.propTypes = {
}