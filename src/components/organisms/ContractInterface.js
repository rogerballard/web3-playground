import React, { Component } from 'react'
import { Divider, Form, Header } from 'semantic-ui-react'

class ContractInterface extends Component {
  renderForm (form) {
    const {
      key,
      onSubmit,
      loading,
      disabled,
      visible,
      header,
      inputs,
      button
    } = form

    if (visible === false) return null

    return (
      <div key={key}>
        <Form onSubmit={onSubmit} loading={loading} disabled={disabled}>
          <Header {...header} />
          <Form.Group>
            {inputs.map(input => <Form.Input key={input.name} {...input} />)}
          </Form.Group>
          <Form.Button {...button} />
        </Form>
        <Divider />
      </div>
    )
  }
  render () {
    const { forms } = this.props
    return (
      <div>
        {forms.map(form => this.renderForm(form))}
      </div>
    )
  }
}

export default ContractInterface
