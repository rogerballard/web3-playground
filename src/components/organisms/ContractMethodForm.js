import React, { Component } from 'react'
import { Form, Header } from 'semantic-ui-react'

class ContractMethodForm extends Component {
  render () {
    const {
      id,
      onSubmit,
      loading,
      disabled,
      header,
      inputs,
      button
    } = this.props

    return (
      <Form key={id} onSubmit={onSubmit} loading={loading} disabled={disabled}>
        <Header {...header} />
        <Form.Group>
          {inputs.map(input => <Form.Input key={input.key} {...input} />)}
        </Form.Group>
        <Form.Button {...button} />
      </Form>
    )
  }
}

export default ContractMethodForm
