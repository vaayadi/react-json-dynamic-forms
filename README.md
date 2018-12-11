# react-json-dynamic-forms

> 

[![NPM](https://img.shields.io/npm/v/react-json-dynamic-forms.svg)](https://www.npmjs.com/package/react-json-dynamic-forms) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-json-dynamic-forms
```

## Usage
```jsx
const metaData = {
  firstName: {
    type: 'TextInput',
    label: 'first name',
    placeholder: 'first name',
    helperText: 'First Name',
    disabled: false,
    className: '',
    readOnly: false,
    values: null
  },
  lastName: {
    type: 'TextInput',
    label: 'last name',
    placeholder: 'Name',
    helperText: 'last name',
    disabled: false,
    className: '',
    readOnly: false,
    dataType: 'string',
    values: null
  },
  age: {
    type: 'NumberInput',
    label: 'age',
    placeholder: 'age',
    helperText: 'Age',
    dataType: 'number',
    values: null
  },
  dob: {
    type: 'DateInput',
    label: '',
    placeholder: '',
    helperText: 'Date of Birth',
    dataType: 'string',
    values: null
  },
  gender: {
    type: 'SelectInput',
    label: 'Select',
    placeholder: '',
    helperText: 'Gender',
    dataType: 'string',
    values: [
      {
        label: 'male',
        value: 'male'
      },
      {
        label: 'female',
        value: 'female'
      }
    ]
  },
  hobbies: {
    type: 'MultipleSelectInput',
    label: '',
    placeholder: '',
    helperText: 'Hobbies',
    dataType: 'string',
    values: [
      {
        label: 'cricket',
        value: 'cricket'
      },
      {
        label: 'vollyball',
        value: 'vollyball'
      }
    ]
  }
}
export default metaData
```
```jsx
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
        { id: 5, type: 'hobbies',
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
```

## License

MIT © [prabaprakash](https://github.com/prabaprakash)
