import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import NumberInput from './NumberInput'
import DateInput from './DateInput'
import SelectInput from './SelectInput'
import MultipleSelectInput from './MultipleSelectInput'
import LabelInput from './LabelInput'
import Grid from '@material-ui/core/Grid'
import _ from 'lodash'

const components = {
  TextInput: TextInput,
  NumberInput: NumberInput,
  DateInput: DateInput,
  SelectInput: SelectInput,
  MultipleSelectInput: MultipleSelectInput,
  LabelInput: LabelInput
}
export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange(event) {
    let elements = _.cloneDeep(this.props.elements)
    elements = _.map(elements, element => {
      if (element.id === event.id) _.assign(element, event)
      return element
    })
    elements = this.addDynamicFields(elements, event)
    this.props.onChange(elements)
  }
  addDynamicFields(elements, event) {
    let filter = _.filter(elements, { id: event.id })
    if (!_.isEmpty(filter) && _.get(filter[0], 'dynamic')) {
      let element = _.cloneDeep(filter[0])
      _.mapKeys(element.dynamic, (values, key) => {
        if (key !== element.value) _.pullAllBy(elements, values, 'type')
      })
      if (_.findIndex(elements, element.dynamic[event.value][0]) === -1) { elements.push(...element.dynamic[event.value])}
    }
    return _.sortBy(elements, ['id'])
  }
  renderElement(element) {
    let metadata = this.props.metaData[element.type]
    const Annotation = _.cloneDeep(components)[metadata.type]
    if (_.get(element, 'value')) metadata['defaultValue'] = element.value
    if (_.get(element, 'invalid')) metadata['invalid'] = element.invalid
    return (
      <Grid item xs={element.xs} >
        <Annotation id={element.id} onChange={this.onChange} {...metadata} />
      </Grid>
    )
  }
  render() {
    return <Grid container spacing={24}>{_.map(this.props.elements, (element, key) => this.renderElement(element))}</Grid>
  }
}

Form.propTypes = {
  elements: PropTypes.array,
  onChange: PropTypes.func,
  metaData: PropTypes.object
}
