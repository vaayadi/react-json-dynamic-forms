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
  customInput: {
    type: 'customInput',
    label: 'customInput',
    placeholder: 'email',
    helperText: 'customInput',
    disabled: false,
    readOnly: false,
    values: null,
    validation: 'required|email',
    className: 'customInput'
  },
  muCheckboxInput: {
    type: 'MuCheckboxInput',
    label: 'muCheckboxInput',
    disabled: false,
    className: 'fields',
    readOnly: false,
    values: null,
    validation: 'required'
  },
  muDateInput: {
    type: 'MuDateInput',
    label: 'muDateInput',
    helperText: 'muDateInput',
    disabled: false,
    className: 'fields',
    readOnly: false,
    values: null,
    validation: 'required'
  },
  muDateTimeInput: {
    type: 'MuDateTimeInput',
    label: 'muDateTimeInput',
    className: 'fields',
    helperText: 'muDateTimeInput',
    values: null,
  },
  muMultipleSelectInput: {
    type: 'MuMultipleSelectInput',
    label: 'muMultipleSelectInput',
    placeholder: '',
    className: 'fields',
    helperText: 'Date of Birth',
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
  muNumberInput: {
    type: 'MuNumberInput',
    label: 'muNumberInput',
    placeholder: '',
    className: 'fields',
    helperText: 'muNumberInput',
    values: null,
    validation: 'required|min:18',

  },
  muRadioInput: {
    type: 'MuRadioInput',
    label: 'muRadioInput',
    placeholder: '',
    className: 'fields',
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
  },
  muSelectInput: {
    type: 'MuSelectInput',
    label: 'muSelectInput',
    placeholder: '',
    className: 'fields',
    helperText: 'radio',
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
  muSwitchInput: {
    type: 'MuSwitchInput',
    label: 'muSwitchInput',
    placeholder: '',
    className: 'fields',
    helperText: 'MuSwitchInput',
    values: null
  },
  muTextAreaInput: {
    type: 'MuTextAreaInput',
    label: 'muTextAreaInput',
    placeholder: '',
    className: 'fields',
    helperText: 'muTextAreaInput',
    validation: 'required'
  },
  muTextInput: {
    type: 'MuTextInput',
    label: 'muTextInput',
    placeholder: '',
    helperText: 'muTextInput',
    className: 'fields'
  },
  muTimeInput: {
    type: 'MuTimeInput',
    label: 'muTimeInput',
    placeholder: '',
    helperText: 'muTimeInput',
    className: 'fields'
  }
}
export default metaData
```


## License

MIT © [prabaprakash](https://github.com/prabaprakash)
