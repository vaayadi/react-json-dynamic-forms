import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import _ from 'lodash'
export default class MuRadioInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.renderMenuItems = this.renderMenuItems.bind(this)
  }
  handleOnChange(event) {
    this.props.onChange({ id: this.props.id, value: event.target.value })
  }
  renderMenuItems() {
    return _.map(this.props.values, (value, key) =>
      <FormControlLabel key={`${this.props.id}-${key}`} value={value.value}
        control={<Radio />} label={value.label} />)
  }
  render() {
    return (
      <FormControl component='fieldset' className={this.props.className || ''}>
        <FormLabel component='legend'>{this.props.label}</FormLabel>
        <RadioGroup
          aria-label={this.props.label}
          name={this.props.id}
          value={this.props.defaultValue}
          onChange={this.handleOnChange}
          error={this.props.invalid || ''}
        >
          {this.renderMenuItems()}
        </RadioGroup>
      </FormControl>
    )
  }
}

MuRadioInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.any,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  invalid: PropTypes.bool,
  values: PropTypes.array
}
