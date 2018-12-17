import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import _ from 'lodash'
export default class MuSelectInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.renderMenuItems = this.renderMenuItems.bind(this)
  }
  handleOnChange(event) {
    this.props.onChange({ id: this.props.id, value: event.target.value })
  }
  renderMenuItems() {
    return _.map(this.props.values, (value) =>
      <MenuItem key={value.label} value={value.value}>{value.label}</MenuItem>)
  }
  handleOnInput(e) {}
  render() {
    return (
      <FormControl
        className={this.props.className ? this.props.className : ''}
      >
        <InputLabel>{this.props.label}</InputLabel>
        <Select
          value={this.props.defaultValue ? this.props.defaultValue : ''}
          error={this.props.invalid}
          onChange={this.handleOnChange}
          name='select'
        >
          {this.renderMenuItems()}
        </Select>
        <FormHelperText>{this.props.helperText}</FormHelperText>
      </FormControl>
    )
  }
}

MuSelectInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.any,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  helperText: PropTypes.string,
  invalid: PropTypes.bool,
  values: PropTypes.array
}
