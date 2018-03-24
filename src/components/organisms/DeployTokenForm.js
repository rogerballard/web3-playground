import React, { Component } from 'react'
import { Form, Header } from 'semantic-ui-react'

class DeployTokenForm extends Component {
  render () {
    const {
      onChange,
      onSubmit,
      loading,
      disabled,
      name,
      symbol,
      decimals
    } = this.props

    return (
      <div>
        <Header as='h3' icon='send' content='Deploy New Token' />
        <p>Deploy a new token contract to the blockchain.</p>
        <Form onSubmit={onSubmit} loading={loading} disabled={disabled}>
          <Form.Input
            label='Name'
            name='name'
            placeholder='Ethereum'
            value={name}
            onChange={onChange}
          />
          <Form.Input
            label='Symbol'
            name='symbol'
            placeholder='ETH'
            value={symbol}
            onChange={onChange}
          />
          <Form.Input
            label='Decimals'
            name='decimals'
            placeholder='18'
            value={decimals}
            onChange={onChange}
          />
          <Form.Button content='Deploy Contract' primary />
        </Form>
      </div>
    )
  }
}

export default DeployTokenForm
