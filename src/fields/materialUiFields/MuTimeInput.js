import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
export default class MuTimeInput extends React.Component {
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
        type='time'
        error={this.props.invalid}
        label={this.props.label}
        placeholder={this.props.placeholder}
        helperText={this.props.helperText}
        margin='normal'
        value={this.props.defaultValue || '00:00'}
        InputLabelProps={{
          shrink: true
        }}
        inputProps={{
          step: 300 // 5 min
        }}
      />
    )
  }
}

MuTimeInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.any,
  onChange: PropTypes.func,
  label: PropTypes.string,
  invalid: PropTypes.bool,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  defaultValue: PropTypes.string
}
