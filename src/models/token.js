/**
 * Define token model
 * @type {Object}
 */
const token = {
  state: {
    contract: null,
    abi: null
  },
  reducers: {
    setAbi (state, payload) {
      return {
        ...state,
        abi: payload
      }
    }
  },
  effects: {
    async compile (payload, rootState) {
      let web3 = rootState.web3.instance
      let contract = rootState.token.contract
      console.log(contract)
      console.log(web3.eth.compile.solidity(contract))
        // .then(abi => {
        //   console.log(abi)
        //   this.setAbi(abi)
        // })
      // console.log(abi)
      // this.setAbi(abi)
    },
    async deploy (payload, rootState) {
      let web3 = rootState.web3.instance
      let abi = rootState.token.abi
      let TokenContract = await web3.eth.contract(abi)
      debugger
    }
  }
}

export default token
