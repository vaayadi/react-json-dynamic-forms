import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

export default class MuNumberInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)
  }
  handleOnChange(e) {
    this.props.onChange({ id: this.props.id, value: parseInt(e.target.value) })
  }
  handleOnBlur(e) {
    this.props.onChange({ id: this.props.id, value: parseInt(e.target.value) })
  }
  render() {
    return (
      <TextField
        className={this.props.className ? this.props.className : ''}
        defaultValue={this.props.defaultValue ? this.props.defaultValue : ''}
        onBlur={this.handleOnBlur}
        error={this.props.invalid}
        type='number'
        label={this.props.label}
        placeholder={this.props.placeholder}
        helperText={this.props.helperText}
        margin='normal'
      />
    )
  }
}

MuNumberInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.any,
  defaultValue: PropTypes.any,
  invalid: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string
}
