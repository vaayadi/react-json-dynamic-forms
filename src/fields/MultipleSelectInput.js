import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import _ from 'lodash'
export default class MultipleSelectInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)
    this.handleOnInput = this.handleOnInput.bind(this)
    this.renderMenuItems = this.renderMenuItems.bind(this)
    this.state = {
      multiselect: []
    }
  }
  handleOnChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleOnBlur(e) {
    this.props.onChange({ id: this.props.id, value: e.target.value })
  }
  renderMenuItems() {
    return _.map(this.props.values, (value) =>
      <MenuItem key={value.label} value={value.value}>
        <Checkbox checked={this.state.multiselect.indexOf(value.value) > -1} />
        <ListItemText primary={value.value} />
      </MenuItem>)
  }
  handleOnInput(e) {}
  render() {
    return (
      <FormControl>
        <InputLabel>{this.props.label}</InputLabel>
        <Select
          multiple
          value={this.state.multiselect}
          onBlur={this.handleOnBlur}
          onInput={this.handleOnInput}
          onChange={this.handleOnChange}
          name='multiselect'
          renderValue={selected => selected.join(', ')}
        >
          {this.renderMenuItems()}
        </Select>
        <FormHelperText>{this.props.helperText}</FormHelperText>
      </FormControl>
    )
  }
}

MultipleSelectInput.propTypes = {
  onChange: PropTypes.func
}
