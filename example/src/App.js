import React, { Component } from 'react'
import ReactJsonDynamicForms from 'react-json-dynamic-forms'
import metaData from './metaData'
import './index.css'
import customInput from './customInput'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elements: [
        { id: -1, type: 'email', value: 'Custom Input'},
        { id: 0, type: 'firstName', value: 'Bootstarp Input'},
        { id: 1, type: 'lastName', value: 'MaterialUi Input'},
        { id: 2, type: 'age', value: '18'},
        { id: 3, type: 'dob'},
        { id: 4, type: 'gender', value: 'female'},
        { id: 5, type: 'hobbies'},
        { id: 6, type: 'education'},
        { id: 7, type: 'extraCurricular'},
      ]
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(elements) {
    this.setState({ elements: elements })
  }
  render() {
    const _customComponents = {customInput}
    return (
    <ReactJsonDynamicForms
      elements={this.state.elements}
      onChange={this.onChange}
      metaData={metaData}
      className='reactform'
      customComponents= {_customComponents}
    />)
  }
}

App.propTypes = {
}