import React from 'react'
import PropTypes from 'prop-types'
import {
  FormGroup,
  Radio
} from 'react-bootstrap'
import _ from 'lodash'
export default class BsRadioInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.renderMenuItems = this.renderMenuItems.bind(this)
  }
  handleOnChange(e) {
    this.props.onChange({
      id: this.props.id,
      value: e.target.value
    })
  }
  renderMenuItems() {
    return (_.map(this.props.values, (value) =>
      <Radio name={this.props.id} key={value.label} defaultChecked={this.props.defaultValue === value.value} value={value.value}>{value.label}</Radio>))
  }
  render() {
    return (
      <FormGroup value={this.props.defaultValue || ''}
        onChange={this.handleOnChange}
        controlId='formControlsSelect'
        className={this.props.className ? this.props.className : ''}
        validationState={this.props.invalid ? 'error' : null}>
        {this.renderMenuItems()}
      </FormGroup>
    )
  }
}

BsRadioInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.any,
  defaultValue: PropTypes.string,
  // placeholder: PropTypes.string,
  onChange: PropTypes.func,
  // label: PropTypes.string,
  invalid: PropTypes.bool,
  // readOnly: PropTypes.bool,
  values: PropTypes.array
}
