import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export default class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }
  handleOnChange(e) {
    this.props.onChange({ id: this.props.id, value: e.target.value });
  }
  handleOnBlur(e) {
    this.props.onChange({ id: this.props.id, value: e.target.value });
  }
  render() {
    return (
      <TextField
        defaultValue = {this.props.defaultValue ? this.props.defaultValue : '' }
        onBlur={this.handleOnBlur}
        type="number"
        label={this.props.label}
        placeholder = {this.props.placeholder}
        helperText={this.props.helperText}
        margin="normal"
      />
    );
  }
}

NumberInput.propTypes = {
  onChange: PropTypes.func,
};
