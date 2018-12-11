import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
export default class DateInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnInput = this.handleOnInput.bind(this);
  }
  handleOnChange(e) {
    this.props.onChange({ id: this.props.id, value: e.target.value });
  }
  handleOnBlur(e) {
    console.log(e.target.value);
    this.props.onChange({ id: this.props.id, value: e.target.value });
  }
  handleOnInput(e) {
  }
  render() {
    return (
      <TextField
        onBlur={e => this.handleOnBlur(e)}
        onInput={e => this.handleOnInput(e)}
        type="date"
        label={this.props.label}
        placeholder = {this.props.placeholder}
        helperText={this.props.helperText}
        margin="normal"
      />
    );
  }
}

DateInput.propTypes = {
  onChange: PropTypes.func,
};
