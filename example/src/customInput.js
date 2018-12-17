import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './customInput.css'
import _ from 'lodash'
export default class customInput extends PureComponent {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    this.props.onChange({
        id: this.props.id,
        value: e.target.value
      })
  }
  render() {
    return (
      <div className={_.isEmpty(this.props.className)? 'customInput': this.props.className} >
      <label htmlFor={this.props.id}>{this.props.label}</label>
      <input 
        className={_.get(this.props, 'invalid', false)? 'focusError': ''}
        id={this.props.id}
        readOnly={this.props.readOnly | ''}
        onChange={this.onChange}
        defaultValue={this.props.defaultValue}
        type='text'
        />
      </div>
   )
  }
}

customInput.propTypes = {
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