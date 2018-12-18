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
    type: 'BsRadioInput',
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
  },
  bsCheckboxInput: {
    type: 'BsCheckboxInput',
    label: 'BsCheckboxInput',
    disabled: false,
    className: 'fields',
    readOnly: false,
    values: null,
    validation: 'required'
  },
  bsDateInput: {
    type: 'BsDateInput',
    label: 'BsDateInput',
    helperText: 'BsDateInput',
    disabled: false,
    className: 'fields',
    readOnly: false,
    values: null,
    validation: 'required'
  },
  bsMultipleSelectInput: {
    type: 'BsMultipleSelectInput',
    label: 'bsMultipleSelectInput',
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
  bsRadioInput: {
    type: 'BsRadioInput',
    label: 'bsRadioInput',
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
  bsSelectInput: {
    type: 'BsSelectInput',
    label: 'bsSelectInput',
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
  bsTextAreaInput: {
    type: 'BsTextAreaInput',
    label: 'bsTextAreaInput',
    placeholder: '',
    className: 'fields',
    helperText: 'bsTextAreaInput',
    validation: 'required'
  },
  bsTextInput: {
    type: 'BsTextInput',
    label: 'bsTextInput',
    placeholder: '',
    helperText: 'bsTextInput',
    className: 'fields'
  }
}
export default metaData
