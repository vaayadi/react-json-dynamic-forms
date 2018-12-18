import React from 'react'
import PropTypes from 'prop-types'
import {
  FormGroup,
  Checkbox
} from 'react-bootstrap'
export default class BsCheckboxInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }
  handleOnChange(e) {
    this.props.onChange({
      id: this.props.id,
      value: e.target.checked
    })
  }
  renderItem() {
    return (<Checkbox
      name={this.props.id}
      defaultChecked={this.props.defaultValue}
      value={this.props.defaultValue}>
      {this.props.label}
    </Checkbox>)
  }
  render() {
    return (
      <FormGroup
        onChange={this.handleOnChange}
        controlId='formControlsSelect'
        className={this.props.className ? this.props.className : ''}
        validationState={this.props.invalid ? 'error' : null}>
        {this.renderItem()}
      </FormGroup>
    )
  }
}

BsCheckboxInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.any,
  defaultValue: PropTypes.any,
  // placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  invalid: PropTypes.bool
  // readOnly: PropTypes.bool,
  // values: PropTypes.array
}
