import React, { Component } from 'react'
import { Form, Header, Label, Segment } from 'semantic-ui-react'

class ContractMethodForm extends Component {
  render () {
    const {
      id,
      onSubmit,
      loading,
      disabled,
      header,
      label,
      inputs,
      button
    } = this.props

    return (
      <Segment>
        <Header {...header} />
        <Label attached='top right' {...label} />
        <Form key={id} onSubmit={onSubmit} loading={loading} disabled={disabled}>
          <Form.Group>
            {inputs.map(input => <Form.Input key={input.key} {...input} />)}
          </Form.Group>
          <Form.Button primary {...button} />
        </Form>
      </Segment>
    )
  }
}

export default ContractMethodForm
