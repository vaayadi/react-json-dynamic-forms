import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
export default class MuTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  handleOnChange(e) {
    this.props.onChange({
      id: this.props.id,
      value: e.target.value
    })
  }
  render() {
    return (<TextField
      className={this.props.className ? this.props.className : ''}
      InputProps={
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
      onChange={
        e => this.handleOnChange(e)
      }
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

MuTextInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.any,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  helperText: PropTypes.string,
  invalid: PropTypes.bool,
  readOnly: PropTypes.bool
}
