import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import _ from 'lodash'
export default class SelectInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)
    this.handleOnInput = this.handleOnInput.bind(this)
    this.renderMenuItems = this.renderMenuItems.bind(this)
    this.state = {
      select: this.props.defaultValue ? this.props.defaultValue : ''
    }
  }
  handleOnChange(event) {
    this.setState({ [event.target.name]: event.target.value })
    this.props.onChange({ id: this.props.id, value: event.target.value })
  }
  handleOnBlur(e) {
    this.props.onChange({ id: this.props.id, value: e.target.value })
  }
  renderMenuItems() {
    return _.map(this.props.values, (value) =>
      <MenuItem key={value.label} value={value.value}>{value.label}</MenuItem>)
  }
  handleOnInput(e) {}
  render() {
    return (
      <FormControl>
        <InputLabel>{this.props.label}</InputLabel>
        <Select
          value={this.state.select}
          onBlur={this.handleOnBlur}
          onInput={this.handleOnInput}
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

SelectInput.propTypes = {
  onChange: PropTypes.func
}
