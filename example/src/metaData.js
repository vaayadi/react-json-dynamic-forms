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
  muSwitchInput: {
    type: 'MuSwitchInput',
    label: 'Checkbox',
    placeholder: '',
    className: 'dob',
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
