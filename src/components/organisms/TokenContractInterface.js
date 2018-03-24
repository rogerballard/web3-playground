import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

import ContractMethodForm from './ContractMethodForm'

class TokenContractInterface extends Component {
  render () {
    const { visible } = this.props

    if (visible === false) return null

    return (
      <Segment>
        {this.renderMintMethod()}
      </Segment>
    )
  }
  renderMintMethod () {
    const { onChangeMint, onSubmitMint, amount, recipient } = this.props

    const data = {
      id: 'mint',
      onSubmit: onSubmitMint,
      loading: false,
      disabled: false,
      visible: true,
      header: {
        as: 'h3',
        content: 'Mint',
        subheader: 'Create and send an amount of tokens to the recipient.'
      },
      inputs: [
        {
          key: 'amount',
          label: 'Amount',
          name: 'amount',
          placeholder: '1000',
          width: 4,
          value: amount,
          onChange: onChangeMint
        },
        {
          key: 'recipient',
          label: 'Recipient',
          name: 'recipient',
          placeholder: 'Address',
          width: 10,
          value: recipient,
          onChange: onChangeMint
        }
      ],
      button: {
        content: 'Mint'
      }
    }
    return <ContractMethodForm {...data} />
  }
}

export default TokenContractInterface
