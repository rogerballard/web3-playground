import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class TokenForm extends Component {
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
        <Form.Button content='Deploy Contract' />
      </Form>
    )
  }
}

export default TokenForm
