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
        { id: 'customInput', value: 'Custom Input'},
        { id: 'muCheckboxInput'},
        { id: 'muDateInput'},
        { id: 'muDateTimeInput'},
        { id: 'muMultipleSelectInput'},
        { id: 'muNumberInput'},
        { id: 'muRadioInput', value: 'female'},
        { id: 'muSelectInput'},
        { id: 'muSwitchInput', value: true},
        { id: 'muTextAreaInput', value: 'three'},
        { id: 'muTextInput', value: 'four'},
        { id: 'muTimeInput'},
        { id: 'bsCheckboxInput'},
        { id: 'bsDateInput'},
        { id: 'bsMultipleSelectInput'},
        { id: 'bsRadioInput', value: 'male'},
        { id: 'bsSelectInput'},
        { id: 'bsTextAreaInput'},
        { id: 'bsTextInput'},
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