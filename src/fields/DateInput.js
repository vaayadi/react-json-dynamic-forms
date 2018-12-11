import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
export default class DateInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)
    this.handleOnInput = this.handleOnInput.bind(this)
  }
  handleOnChange(e) {
    this.props.onChange({ id: this.props.id, value: e.target.value })
  }
  handleOnBlur(e) {
    this.props.onChange({ id: this.props.id, value: e.target.value })
  }
  handleOnInput(e) {
  }
  render() {
    return (
      <TextField
        className={this.props.className ? this.props.className : ''}
        onBlur={e => this.handleOnBlur(e)}
        onInput={e => this.handleOnInput(e)}
        type='date'
        error={this.props.invalid}
        label={this.props.label}
        placeholder={this.props.placeholder}
        helperText={this.props.helperText}
        margin='normal'
      />
    )
  }
}

DateInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  onChange: PropTypes.func,
  label: PropTypes.string,
  invalid: PropTypes.bool,
  placeholder: PropTypes.string,
  helperText: PropTypes.string
}
