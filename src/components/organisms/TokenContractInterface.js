import React, { Component } from 'react'
import { Divider, Header } from 'semantic-ui-react'

import ContractMethodForm from './ContractMethodForm'

class TokenContractInterface extends Component {
  render () {
    return (
      <div>
        <Header
          as='h3'
          block
          content='Basic Methods'
          subheader='Everyone can use'
        />
        {this.renderBalanceOfMethod()}
        {this.renderTransferMethod()}
        <Divider />
        <Header
          as='h3'
          block
          content='Owner Methods'
          subheader='Restricted to only the owner of the contract'
        />
        {this.renderMintMethod()}
        {this.renderFinishMintingMethod()}
        {this.renderTransferOwnershipMethod()}
        <Divider />
        <Header
          as='h3'
          block
          content='Advanced Methods'
          subheader='More advanced methods for access delegation'
        />
        {this.renderAllowanceMethod()}
        {this.renderTransferFromMethod()}
        {this.renderApproveMethod()}
        {this.renderIncreaseApprovalMethod()}
        {this.renderDecreaseApprovalMethod()}
      </div>
    )
  }
  renderAllowanceMethod () {
    const {
      onChangeAllowance,
      onSubmitAllowance,
      allowance,
      address,
      symbol
    } = this.props

    const data = {
      id: 'allowance',
      onSubmit: onSubmitAllowance,
      loading: allowance.loading,
      disabled: false,
      visible: true,
      header: {
        content: 'Allowance',
        subheader: 'Fetch the amount of tokens that an owner allowed to a spender.'
      },
      label: {
        content: 'Call',
        color: 'green'
      },
      inputs: [
        {
          key: 'owner',
          label: 'Owner Address',
          name: 'owner',
          placeholder: address,
          width: 10,
          value: allowance.owner !== address ? allowance.owner : '',
          onChange: onChangeAllowance
        },
        {
          key: 'spender',
          label: 'Spender Address',
          name: 'spender',
          placeholder: address,
          width: 10,
          value: allowance.spender !== address ? allowance.spender : '',
          onChange: onChangeAllowance
        }
      ],
      button: {
        content: 'Get Allowance'
      },
      result: {
        hasValue: allowance.value !== null,
        content: 'Spender can access ' + allowance.value + ' ' + symbol,
      }
    }

    return <ContractMethodForm {...data} />
  }
  renderApproveMethod () {
    const {
      onChangeApprove,
      onSubmitApprove,
      approve,
      address,
      symbol
    } = this.props

    const data = {
      id: 'approve',
      onSubmit: onSubmitApprove,
      loading: approve.loading,
      disabled: false,
      visible: true,
      header: {
        content: 'Approve',
        subheader: 'Approve the address to spend the specified amount of tokens on your behalf.'
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
          placeholder: approve.amount,
          width: 4,
          value: approve.amount !== 0 ? approve.amount : '',
          onChange: onChangeApprove,
          type: 'number'
        },
        {
          key: 'spender',
          label: 'Spender Address',
          name: 'spender',
          placeholder: address,
          width: 10,
          value: approve.spender !== address ? approve.spender : '',
          onChange: onChangeApprove
        },
      ],
      button: {
        content: 'Approve'
      },
      result: {
        hasValue: approve.value !== null,
        content: approve.value !== null
          ? 'Approved ' + approve.value.value + ' ' + symbol + ' to ' + approve.value.spender
          : null
      }
    }
    return <ContractMethodForm {...data} />
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
        content: 'Balance: ' + balanceOf.value + ' ' + symbol,
        icon: 'certificate'
      }
    }

    return <ContractMethodForm {...data} />
  }
  renderDecreaseApprovalMethod () {
    const {
      onChangeDecreaseApproval,
      onSubmitDecreaseApproval,
      address,
      decreaseApproval,
      symbol
    } = this.props

    const data = {
      id: 'decreaseApproval',
      onSubmit: onSubmitDecreaseApproval,
      loading: decreaseApproval.loading,
      disabled: false,
      visible: true,
      header: {
        content: 'Decrease Approval',
        subheader: 'Decrease the amount of tokens another address can spend on your behalf.'
      },
      label: {
        content: 'Transaction',
        color: 'orange'
      },
      inputs: [
        {
          key: 'subtractValue',
          label: 'Subtract Value',
          name: 'subtractValue',
          placeholder: decreaseApproval.subtractValue,
          width: 4,
          value: decreaseApproval.subtractValue !== 0
            ? decreaseApproval.subtractValue : '',
          onChange: onChangeDecreaseApproval,
          type: 'number'
        },
        {
          key: 'spender',
          label: 'Spender',
          name: 'spender',
          placeholder: address,
          width: 10,
          value: decreaseApproval.spender !== address
            ? decreaseApproval.spender : address,
          onChange: onChangeDecreaseApproval
        }
      ],
      button: {
        content: 'Decrease Approval'
      },
      result: {
        hasValue: decreaseApproval.value !== null,
        content: decreaseApproval.value !== null
          ? 'Decreased allowance to ' + decreaseApproval.value.value + ' ' + symbol + ' for spender ' + decreaseApproval.value.spender
          : null
      }
    }
    return <ContractMethodForm {...data} />
  }
  renderFinishMintingMethod () {
    const {
      onSubmitFinishMinting,
      finishMinting,
      mintingFinished,
      owner,
      address
    } = this.props

    const data = {
      id: 'finishMinting',
      onSubmit: onSubmitFinishMinting,
      loading: finishMinting.loading,
      disabled: mintingFinished.value || owner.value !== address,
      visible: true,
      header: {
        content: 'Finish Minting',
        subheader: 'End the minting process to lock the total supply of tokens.'
      },
      label: {
        content: 'Transaction',
        color: 'orange'
      },
      button: {
        content: 'Finish Minting'
      },
      result: {
        hasValue: finishMinting.value !== null,
        content: finishMinting.value !== null ? 'Minting Finished' : null
      }
    }
    return <ContractMethodForm {...data} />
  }
  renderIncreaseApprovalMethod () {
    const {
      onChangeIncreaseApproval,
      onSubmitIncreaseApproval,
      address,
      increaseApproval,
      symbol
    } = this.props

    const data = {
      id: 'increaseApproval',
      onSubmit: onSubmitIncreaseApproval,
      loading: increaseApproval.loading,
      disabled: false,
      visible: true,
      header: {
        content: 'Increase Approval',
        subheader: 'Increase the amount of tokens another address can spend on your behalf.'
      },
      label: {
        content: 'Transaction',
        color: 'orange'
      },
      inputs: [
        {
          key: 'addValue',
          label: 'Add Value',
          name: 'addValue',
          placeholder: increaseApproval.addValue,
          width: 4,
          value: increaseApproval.addValue !== 0
            ? increaseApproval.addValue : '',
          onChange: onChangeIncreaseApproval,
          type: 'number'
        },
        {
          key: 'spender',
          label: 'Spender',
          name: 'spender',
          placeholder: address,
          width: 10,
          value: increaseApproval.spender !== address
            ? increaseApproval.spender : address,
          onChange: onChangeIncreaseApproval
        }
      ],
      button: {
        content: 'Increase Approval'
      },
      result: {
        hasValue: increaseApproval.value !== null,
        content: increaseApproval.value !== null
          ? 'Increased allowance to ' + increaseApproval.value.value + ' ' + symbol + ' for spender ' + increaseApproval.value.spender
          : null
      }
    }
    return <ContractMethodForm {...data} />
  }
  renderMintMethod () {
    const {
      onChangeMint,
      onSubmitMint,
      address,
      symbol,
      mint,
      mintingFinished,
      owner
    } = this.props

    const data = {
      id: 'mint',
      onSubmit: onSubmitMint,
      loading: mint.loading,
      disabled: mintingFinished.value || owner.value !== address,
      visible: true,
      header: {
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
      },
      result: {
        hasValue: mint.value !== null,
        content: mint.value !== null
          ? mint.value.amount + ' ' + symbol + ' minted to ' + mint.value.to
          : null
      }
    }
    return <ContractMethodForm {...data} />
  }
  renderTransferMethod () {
    const {
      onChangeTransfer,
      onSubmitTransfer,
      transfer,
      symbol,
      address
    } = this.props

    const data = {
      id: 'transfer',
      onSubmit: onSubmitTransfer,
      loading: transfer.loading,
      visible: true,
      header: {
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
        content: transfer.value !== null
          ? transfer.value.value + ' ' + symbol + ' transferred to ' + transfer.value.to
          : null
      }
    }
    return <ContractMethodForm {...data} />
  }
  renderTransferFromMethod () {
    const {
      onChangeTransferFrom,
      onSubmitTransferFrom,
      transferFrom,
      address,
      symbol
    } = this.props

    const data = {
      id: 'transferFrom',
      onSubmit: onSubmitTransferFrom,
      loading: transferFrom.loading,
      visible: true,
      header: {
        content: 'Transfer From',
        subheader: 'Transfer an amount of tokens from one address to another.'
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
          placeholder: transferFrom.amount,
          width: 4,
          value: transferFrom.amount !== 0 ? transferFrom.amount : '',
          onChange: onChangeTransferFrom,
          type: 'number'
        },
        {
          key: 'from',
          label: 'From',
          name: 'from',
          placeholder: address,
          width: 10,
          value: transferFrom.from !== address ? transferFrom.from : '',
          onChange: onChangeTransferFrom
        },
        {
          key: 'to',
          label: 'To',
          name: 'to',
          placeholder: address,
          width: 10,
          value: transferFrom.to !== address ? transferFrom.to : '',
          onChange: onChangeTransferFrom
        }
      ],
      button: {
        content: 'Transfer'
      },
      result: {
        hasValue: transferFrom.value !== null,
        content: transferFrom.value !== null
          ? 'Transferred ' + transferFrom.value.value + ' ' + symbol + ' from ' + transferFrom.value.from + ' to ' + transferFrom.value.to
          : null
      }
    }
    return <ContractMethodForm {...data} />
  }
  renderTransferOwnershipMethod () {
    const {
      onChangeTransferOwnership,
      onSubmitTransferOwnership,
      transferOwnership,
      address,
      owner
    } = this.props

    const data = {
      id: 'transferOwnership',
      onSubmit: onSubmitTransferOwnership,
      loading: transferOwnership.loading,
      disabled: owner.value !== address,
      visible: true,
      header: {
        content: 'Transfer Ownership',
        subheader: 'Transfer ownership of the contract to another address.'
      },
      label: {
        content: 'Transaction',
        color: 'orange'
      },
      inputs: [
        {
          key: 'recipient',
          label: 'Recipient',
          name: 'recipient',
          placeholder: address,
          width: 10,
          value: transferOwnership.recipient !== address
            ? transferOwnership.recipient : '',
          onChange: onChangeTransferOwnership
        }
      ],
      button: {
        content: 'Transfer Ownership'
      },
      result: {
        hasValue: transferOwnership.value !== null,
        content: transferOwnership.value !== null
          ? 'Ownership Transferred to ' + transferOwnership.value.newOwner
          : null
      }
    }
    return <ContractMethodForm {...data} />
  }
}

export default TokenContractInterface
