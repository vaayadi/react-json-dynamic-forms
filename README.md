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
```
```jsx
const metaData = {
  email: {
    type: 'customInput',
    label: 'email',
    placeholder: 'email',
    helperText: 'email',
    disabled: false,
    readOnly: false,
    values: null,
    validation: 'required|email'
  },
  firstName: {
    type: 'BsTextAreaInput',
    label: 'first name',
    placeholder: 'first name',
    helperText: 'First Name',
    disabled: false,
    className: 'firstName',
    readOnly: false,
    values: null,
    validation: 'required'
  },
  lastName: {
    type: 'MuTextInput',
    label: 'last name',
    placeholder: 'Name',
    helperText: 'last name',
    disabled: false,
    className: 'lastName',
    readOnly: false,
    dataType: 'string',
    values: null,
    validation: 'required'
  },
  age: {
    type: 'MuNumberInput',
    label: 'age',
    placeholder: 'age',
    className: 'age',
    helperText: 'Age',
    dataType: 'number',
    values: null,
    validation: 'required|min:18',
  },
  dob: {
    type: 'MuDateInput',
    label: '',
    placeholder: '',
    className: 'dob',
    helperText: 'Date of Birth',
    dataType: 'string',
    values: null
  },
  muDateTime: {
    type: 'MuDateTimeInput',
    label: '',
    placeholder: '',
    className: 'dob',
    helperText: 'muDateTime',
    dataType: 'string',
    values: null
  },
  muRadioInput: {
    type: 'MuRadioInput',
    label: '',
    placeholder: '',
    className: 'dob',
    helperText: 'radio',
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
    ],
    validation: 'required'
  },
  muTime: {
    type: 'MuTimeInput',
    label: '',
    placeholder: '',
    className: 'dob',
    helperText: 'time',
    dataType: 'string',
    values: null
  },
  gender: {
    type: 'BsSelectInput',
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
    ],
    validation: 'required'
  },
  hobbies: {
    type: 'BsMultipleSelectInput',
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
  },
  education: {
    type: 'MuMultipleSelectInput',
    label: '',
    placeholder: '',
    helperText: 'education',
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
  },
  extraCurricular: {
    type: 'MuMultipleSelectInput',
    label: '',
    placeholder: '',
    helperText: 'extraCurricular',
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
