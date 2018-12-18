import React from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
export default class MuSwitchInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  handleOnChange(e) {
    this.props.onChange({
      id: this.props.id,
      value: e.target.checked
    })
  }
  render() {
    return (<FormControlLabel
      className={this.props.className ? this.props.className : ''}
      readOnly={this.props.readOnly || false}
      control={
        <Switch
          checked={this.props.defaultValue || false}
          onChange={this.handleOnChange}
        />
      }
      error={this.props.invalid || ''}
      label={this.props.label}
    />)
  }
}

MuSwitchInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.any,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  label: PropTypes.string,
  invalid: PropTypes.bool,
  readOnly: PropTypes.bool
}
