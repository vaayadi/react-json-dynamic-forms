import React from 'react'
import PropTypes from 'prop-types'
import {
  FormControl,
  ControlLabel,
  FormGroup,
  HelpBlock
} from 'react-bootstrap'
export default class BsDateInput extends React.Component {
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
      <FormGroup className={this.props.className ? this.props.className : ''} validationState={this.props.invalid ? 'error' : null}>
        <ControlLabel>{this.props.label ? this.props.label : ''}</ControlLabel>
        <FormControl
          type='date'
          defaultValue={this.props.defaultValue ? this.props.defaultValue : this.getCurrentDate()}
          onChange={this.handleOnChange}
          placeholder={this.props.placeholder ? this.props.placeholder : ''}
          readOnly={this.props.readOnly ? this.props.readOnly : false}
        />
        <FormControl.Feedback />
        <HelpBlock>{this.props.helperText ? this.props.helperText : ''}</HelpBlock>
      </FormGroup>
    )
  }
}

BsDateInput.propTypes = {
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
