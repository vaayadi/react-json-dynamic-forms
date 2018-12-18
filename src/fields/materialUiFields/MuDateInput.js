import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
export default class MuDateInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  handleOnChange(e) {
    this.props.onChange({ id: this.props.id, value: e.target.value })
  }
  getCurrentDate() {
    const today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    const yyyy = today.getFullYear()
    if (dd < 10) {
      dd = `0${dd}`
    }
    if (mm < 10) {
      mm = `0${mm}`
    }
    return `${yyyy}-${mm}-${dd}`
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
        value={this.props.defaultValue || this.getCurrentDate()}
        InputLabelProps={{
          shrink: true
        }}
      />
    )
  }
}

MuDateInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.any,
  onChange: PropTypes.func,
  label: PropTypes.string,
  invalid: PropTypes.bool,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  defaultValue: PropTypes.string
}
