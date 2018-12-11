import React from 'react'
export default class LabelInput extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.label}</span>
        <span>{this.props.defaultValue}</span>
      </div>
    )
  }
}

LabelInput.propTypes = {
}
