# react-json-dynamic-forms

> 

[![NPM](https://img.shields.io/npm/v/react-json-dynamic-forms.svg)](https://www.npmjs.com/package/react-json-dynamic-forms) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-json-dynamic-forms
```

## Usage
```jsx
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
```
```jsx
const metaData = {
  firstName: {
    type: 'TextInput',
    label: 'first name',
    placeholder: 'first name',
    helperText: 'First Name',
    disabled: false,
    className: 'firstName',
    readOnly: false,
    values: null
  },
  lastName: {
    type: 'TextInput',
    label: 'last name',
    placeholder: 'Name',
    helperText: 'last name',
    disabled: false,
    className: 'lastName',
    readOnly: false,
    dataType: 'string',
    values: null
  },
  age: {
    type: 'NumberInput',
    label: 'age',
    placeholder: 'age',
    className: 'age',
    helperText: 'Age',
    dataType: 'number',
    values: null,
    validation: 'required|min:18',
  },
  dob: {
    type: 'DateInput',
    label: '',
    placeholder: '',
    className: 'dob',
    helperText: 'Date of Birth',
    dataType: 'string',
    values: null
  },
  gender: {
    type: 'SelectInput',
    label: 'Select',
    placeholder: '',
    className: 'gender',
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
    className: 'hobbies',
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


## License

MIT © [prabaprakash](https://github.com/prabaprakash)
