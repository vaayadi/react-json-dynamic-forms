const MetatData = {
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
export default MetatData
