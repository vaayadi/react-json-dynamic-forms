# react-json-dynamic-forms

## Not Stable, Need Contributors
Code Sandbox - https://codesandbox.io/s/exciting-rubin-pi8du?fontsize=14

> 

[![NPM](https://img.shields.io/npm/v/react-json-dynamic-forms.svg)](https://www.npmjs.com/package/react-json-dynamic-forms) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![React Json Dynamic Forms](https://raw.githubusercontent.com/vaayadi/react-json-dynamic-forms/master/fra.png)](https://youtu.be/cM87HKMUuWw)


## Install

```bash
npm install --save react-json-dynamic-forms
```

## Usage
```jsx
import React, { Component } from 'react'
import ReactJsonDynamicForms from 'react-json-dynamic-forms'
const metaData = {
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
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elements: [
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
    const _customComponents = {}
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

## License

MIT © [prabaprakash](https://github.com/prabaprakash)
