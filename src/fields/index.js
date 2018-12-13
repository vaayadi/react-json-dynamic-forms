import React from 'react'
import PropTypes from 'prop-types'
import MuTextInput from './materialUiFields/MuTextInput'
import MuNumberInput from './materialUiFields/MuNumberInput'
import MuDateInput from './materialUiFields/MuDateInput'
import MuSelectInput from './materialUiFields/MuSelectInput'
import MuMultipleSelectInput from './materialUiFields/MuMultipleSelectInput'
import BsTextInput from './bootstrapFields/BsTextInput'
import LabelInput from './htmlFields/LabelInput'
import _ from 'lodash'
import './index.css'
let Validator = require('validatorjs')
export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.mergeCustomComponents = this.mergeCustomComponents.bind(this)
  }
  onChange(event, metaData) {
    let elements = _.cloneDeep(this.props.elements)
    elements = _.map(elements, element => {
      if (element.id === event.id) {
        _.assign(element, event)
        this.validation(metaData, event, element)
      }
      return element
    })
    this.props.onChange(elements)
  }
  validation(metaData, event, element) {
    if (!_.isEmpty(_.get(metaData, 'validation', {}))) {
      const data = {
        [event.id]: event.value
      }
      const rules = {
        [event.id]: metaData.validation
      }
      let validation = new Validator(data, rules)
      if (validation.passes()) {
        element.invalid = false
      } else {
        element.invalid = true
      }
    }
  }
  mergeCustomComponents() {
    const components = {
      MuTextInput,
      MuNumberInput,
      MuDateInput,
      MuSelectInput,
      MuMultipleSelectInput,
      LabelInput,
      BsTextInput,
      ..._.get(this.props, 'customComponents', {})
    }
    return components
  }
  renderElement(element) {
    const _components = this.mergeCustomComponents()
    let metadata = this.props.metaData[element.type]
    const Annotation = _.cloneDeep(_components)[metadata.type]
    if (_.get(element, 'value')) metadata['defaultValue'] = element.value
    metadata['invalid'] = _.get(element, 'invalid', false)
    return (
      <Annotation key={element.id} id={element.id}
        onChange={
          (event) => this.onChange(event, metadata)
        } {...metadata
        }
      />
    )
  }
  render() {
    return <div className={_.get(this.props, 'className', 'reactjsondynamicform')}>
      { _.map(this.props.elements, (element, key) => this.renderElement(element))}
    </div>
  }
}

Form.propTypes = {
  elements: PropTypes.array,
  onChange: PropTypes.func,
  metaData: PropTypes.object,
  className: PropTypes.string,
  customComponents: PropTypes.object
}
