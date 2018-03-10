/**
 * Import dependencies
 */
import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

/**
 * Define TokenForm component
 * @extends Component
 */
class TokenForm extends Component {
  state = {
    decimals: '',
    decimalsValid: true,
    name: '',
    nameValid: true,
    symbol: '',
    symbolValid: true
  }
  /**
   * Render component
   */
  render () {
    const {
      decimals,
      name,
      symbol,
      decimalsValid,
      nameValid,
      symbolValid
    } = this.state

    return (
      <Form onSubmit={this._handleSubmit}>
        <Form.Input
          label='Name'
          placeholder='Ethereum'
          name='name'
          value={name}
          onChange={this._handleChange}
          error={!nameValid}
        />
        <Form.Input
          label='Symbol'
          placeholder='ETH'
          name='symbol'
          value={symbol}
          onChange={this._handleChange}
          type='text'
          error={!symbolValid}
        />
        <Form.Input
          label='Decimals'
          placeholder='18'
          name='decimals'
          value={decimals}
          onChange={this._handleChange}
          type='number'
          error={!decimalsValid}
          min='0'
          max='18'
        />
        <Form.Button>
          Deploy Contract
        </Form.Button>
      </Form>
    )
  }

  _handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  _handleSubmit = () => {
    console.log('_handleSubmit')
  }
}

export default TokenForm
