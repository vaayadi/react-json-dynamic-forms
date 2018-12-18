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
export default class MuMultipleSelectInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.renderMenuItems = this.renderMenuItems.bind(this)
  }
  handleOnChange(e) {
    this.props.onChange({ id: this.props.id, value: e.target.value })
  }
  renderMenuItems() {
    const items = _.get(this.props, 'defaultValue', [])
    return _.map(this.props.values, (value) =>
      <MenuItem key={value.label} value={value.value}>
        <Checkbox checked={items.indexOf(value.value) > -1} />
        <ListItemText primary={value.value} />
      </MenuItem>)
  }
  handleOnInput(e) {}
  render() {
    return (
      <FormControl className={this.props.className ? this.props.className : ''}
      >
        <InputLabel>{this.props.label}</InputLabel>
        <Select
          multiple
          value={this.props.defaultValue ? this.props.defaultValue : []}
          onBlur={this.handleOnBlur}
          onInput={this.handleOnInput}
          onChange={this.handleOnChange}
          error={this.props.invalid}
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

MuMultipleSelectInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.any,
  onChange: PropTypes.func,
  label: PropTypes.string,
  helperText: PropTypes.string,
  defaultValue: PropTypes.any,
  values: PropTypes.array,
  invalid: PropTypes.bool
}
