import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import _ from 'lodash'
export default class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)
    this.handleOnInput = this.handleOnInput.bind(this)
    this.validate = this.validate.bind(this)
  }
  handleOnChange(e) {
    this.props.onChange({
      id: this.props.id,
      value: e.target.value
    })
  }
  validate(e) {
    if (_.get(this.props, 'additionalProps.minLength')) {
      if (e.target.value.length < parseInt(this.props.additionalProps.minLength)) { return true }
    }
    return false
  }
  handleOnBlur(e) {
    this.props.onChange({
      id: this.props.id,
      value: e.target.value,
      invalid: this.validate(e)
    })
  }
  handleOnInput(e) {
    if (_.get(this.props, 'additionalProps.maxLength')) {
      e.target.value = e.target.value.substring(0, this.props.additionalProps.maxLength)
    }
  }
  render() {
    return (<TextField InputProps={
      {
        readOnly: this.props.readOnly ? this.props.readOnly : false
      }
    }
    error={
      this.props.invalid
    }
    defaultValue={
      this.props.defaultValue ? this.props.defaultValue : ''
    }
    onBlur={
      e => this.handleOnBlur(e)
    }
    onInput={
      e => this.handleOnInput(e)
    }z
    label={
      this.props.label
    }
    placeholder={
      this.props.placeholder
    }
    helperText={
      this.props.helperText
    }
    margin='normal' />
    )
  }
}

TextInput.propTypes = {
  onChange: PropTypes.func
}
