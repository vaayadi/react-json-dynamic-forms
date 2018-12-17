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
        { id: 'email', value: 'Custom Input'},
        { id: 'firstName', value: 'Bootstarp Input'},
        { id: 'lastName', value: 'MaterialUi Input'},
        { id: 'age', value: '18'},
        { id: 'dob'},
        { id: 'gender', value: 'female'},
        { id: 'hobbies'},
        { id: 'education'},
        { id: 'extraCurricular'},
        { id: 'muDateTime'},
        { id: 'muTime'},
        { id: 'muRadioInput'},

      ]
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(elements) {
    console.log(elements)
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