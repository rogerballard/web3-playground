/**
 * Import dependencies
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dispatch } from '@rematch/core'
import { Form } from 'semantic-ui-react'

/**
 * Define TokenForm component
 * @extends Component
 */
class TokenForm extends Component {
  /**
   * Render component
   */
  render () {
    const { name, symbol, decimals, loading } = this.props

    return (
      <Form onSubmit={this._handleSubmit} loading={loading}>
        <Form.Input
          label='Name'
          placeholder='Ethereum'
          name='name'
          value={name}
          onChange={this._handleChange}
        />
        <Form.Input
          label='Symbol'
          placeholder='ETH'
          name='symbol'
          value={symbol}
          onChange={this._handleChange}
          type='text'
        />
        <Form.Input
          label='Decimals'
          placeholder='18'
          name='decimals'
          value={decimals}
          onChange={this._handleChange}
          type='number'
          min='0'
          max='18'
        />
        <Form.Button>
          Deploy Contract
        </Form.Button>
      </Form>
    )
  }
  /**
   * Handle form item change
   */
  _handleChange = (e, { name, value }) => {
    dispatch.tokenForm.set({ [name]: value })
  }
  /**
   * Handle form submit
   */
  _handleSubmit = async () => {
    const { name, symbol, decimals } = this.props
    dispatch.tokenForm.toggleLoading()
    await dispatch.token.deploy({ name, symbol, decimals })
    dispatch.tokenForm.toggleLoading()
    dispatch.tokenForm.reset()
  }
}

const mapState = (state) => ({
  name: state.tokenForm.name,
  symbol: state.tokenForm.symbol,
  decimals: state.tokenForm.decimals,
  loading: state.tokenForm.loading
})

export default connect(mapState)(TokenForm)
