import React, { Component } from 'react'

import ContractMethodForm from './ContractMethodForm'

class TokenContractInterface extends Component {
  render () {
    return (
      <div>
        {this.renderBalanceOfMethod()}
        {this.renderFinishMintingMethod()}
        {this.renderMintMethod()}
        {this.renderTransferMethod()}
      </div>
    )
  }
  renderBalanceOfMethod () {
    const {
      onChangeBalanceOf,
      onSubmitBalanceOf,
      balanceOf,
      address,
      symbol
    } = this.props

    const data = {
      id: 'balanceOf',
      onSubmit: onSubmitBalanceOf,
      loading: balanceOf.loading,
      disabled: false,
      visible: true,
      header: {
        as: 'h3',
        content: 'Balance',
        subheader: 'Fetch the balance of an address.'
      },
      label: {
        content: 'Call',
        color: 'green'
      },
      inputs: [
        {
          key: 'address',
          label: 'Address',
          name: 'address',
          placeholder: address,
          width: 10,
          value: balanceOf.address !== address ? balanceOf.address : '',
          onChange: onChangeBalanceOf
        }
      ],
      button: {
        content: 'Get Balance'
      },
      result: {
        hasValue: balanceOf.value !== null,
        content: balanceOf.value + ' ' + symbol,
        icon: 'certificate'
      }
    }

    return <ContractMethodForm {...data} />
  }
  renderFinishMintingMethod () {
    const { onSubmitFinishMinting, finishMinting, mintingFinished } = this.props

    const data = {
      id: 'finishMinting',
      onSubmit: onSubmitFinishMinting,
      loading: finishMinting.loading,
      disabled: mintingFinished.value,
      visible: true,
      header: {
        as: 'h3',
        content: 'Finish Minting',
        subheader: 'End the minting process to lock the total supply of tokens.'
      },
      label: {
        content: 'Transaction',
        color: 'orange'
      },
      button: {
        content: 'Finish Minting'
      }
    }
    return <ContractMethodForm {...data} />
  }
  renderMintMethod () {
    const {
      onChangeMint,
      onSubmitMint,
      address,
      mint,
      mintingFinished
    } = this.props

    const data = {
      id: 'mint',
      onSubmit: onSubmitMint,
      loading: mint.loading,
      disabled: mintingFinished.value,
      visible: true,
      header: {
        as: 'h3',
        content: 'Mint',
        subheader: 'Create and send an amount of tokens to the recipient.'
      },
      label: {
        content: 'Transaction',
        color: 'orange'
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
          placeholder: address,
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
  renderTransferMethod () {
    const {
      onChangeTransfer,
      onSubmitTransfer,
      transfer,
      address
    } = this.props

    const data = {
      id: 'transfer',
      onSubmit: onSubmitTransfer,
      loading: transfer.loading,
      visible: true,
      header: {
        as: 'h3',
        content: 'Transfer',
        subheader: 'Transfer an amount of tokens to an address.'
      },
      label: {
        content: 'Transaction',
        color: 'orange',
      },
      inputs: [
        {
          key: 'amount',
          label: 'Amount',
          name: 'amount',
          placeholder: transfer.amount,
          width: 4,
          value: transfer.amount !== 0 ? transfer.amount : '',
          onChange: onChangeTransfer,
          type: 'number'
        },
        {
          key: 'recipient',
          label: 'Recipient',
          name: 'recipient',
          placeholder: address,
          width: 10,
          value: transfer.recipient !== address ? transfer.recipient : '',
          onChange: onChangeTransfer
        }
      ],
      button: {
        content: 'Transfer'
      },
      result: {
        hasValue: transfer.value !== null,
        content: transfer.value,
        icon: 'calendar'
      }
    }
    return <ContractMethodForm {...data} />
  }
}

export default TokenContractInterface
