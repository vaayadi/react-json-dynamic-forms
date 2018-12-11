import React, { Component } from 'react'

import ReactJsonDynamicForms from 'react-json-dynamic-forms'
import metaData from './metaData'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elements: [
        { id: 0, type: 'firstName', value: 'Read Only', xs: 4 },
        { id: 1, type: 'lastName', value: 'weeeee', xs: 4 },
        { id: 2, type: 'age', value: '312312', xs: 4 },
        { id: 3, type: 'dob', xs: 4 },
        { id: 4, type: 'gender', xs: 4 },
        {
          id: 5,
          type: 'hobbies',
          // dynamic: {
          //   one: [
          //     { id: 5.1, type: 'OneNumberform', xs: 4 },
          //     { id: 5.2, type: 'OneDateform', xs: 4 }
          //   ],
          //   two: [
          //     { id: 5.3, type: 'TwoNumberform', xs: 4 },
          //     { id: 5.4, type: 'TwoDateform', xs: 4 }
          //   ]
          // }
        }
      ]
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(elements) {
    this.setState({ elements: elements })
  }
  render() {
    return (<ReactJsonDynamicForms
      elements={this.state.elements}
      onChange={this.onChange}
      metaData={metaData}
    />)
  }
}

App.propTypes = {
}