import React, { Component } from 'react'
import ContractInterface from './ContractInterface'

const forms = [
  {
    key: 'mint',
    onSubmit: () => console.log('onSubmit'),
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
        label: 'Amount',
        name: 'amount',
        placeholder: '1000',
        onChange: () => console.log('onChange')
      },
      {
        label: 'Recipient',
        name: 'recipient',
        placeholder: 'Address',
        onChange: () => console.log('onChange')
      }
    ],
    button: {
      content: 'Mint'
    }
  }
]

class TokenContractInterface extends Component {
  render () {
    return <ContractInterface forms={forms} />
  }
}

export default TokenContractInterface
