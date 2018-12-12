import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
export default class DateInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  handleOnChange(e) {
    this.props.onChange({ id: this.props.id, value: e.target.value })
  }
  render() {
    return (
      <TextField
        className={this.props.className ? this.props.className : ''}
        onChange={e => this.handleOnChange(e)}
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
