const metaData = {
  firstName: {
    type: 'TextInput',
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
    type: 'TextInput',
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
