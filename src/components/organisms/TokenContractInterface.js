import React, { Component } from 'react'

import ContractMethodForm from './ContractMethodForm'

class TokenContractInterface extends Component {
  render () {
    const { visible } = this.props

    if (visible === false) return null

    return (
      <div>
        {this.renderMintMethod()}
      </div>
    )
  }
  renderMintMethod () {
    const {
      onChangeMint,
      onSubmitMint,
      address,
      mint
    } = this.props

    const data = {
      id: 'mint',
      onSubmit: onSubmitMint,
      loading: mint.loading,
      disabled: false,
      visible: true,
      header: {
        as: 'h3',
        content: 'Mint',
        subheader: 'Create and send an amount of tokens to the recipient.'
      },
      label: {
        content: 'Only Owner'
      },
      inputs: [
        {
          key: 'amount',
          label: 'Amount',
          name: 'amount',
          placeholder: mint.amount,
          width: 4,
          value: mint.amount !== 0 ? mint.amount : '',
          onChange: onChangeMint,
          type: 'number'
        },
        {
          key: 'recipient',
          label: 'Recipient',
          name: 'recipient',
          placeholder: mint.recipient,
          width: 10,
          value: mint.recipient !== address ? mint.recipient : '',
          onChange: onChangeMint,
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
