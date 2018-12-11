import React from 'react'
import PropTypes from 'prop-types'
export default class LabelInput extends React.Component {
  render() {
    return (
      <div className={this.props.className ? this.props.className : ''}
      >
        <span>{this.props.label}</span>
        <span>{this.props.value}</span>
      </div>
    )
  }
}
LabelInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string
}
