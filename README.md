# Web3 Playground
A playground project for exploring, learning and implementing some of the key concepts of the decentralised web (Web3). This is primarily a learn-by-doing experience, where there will be some working examples of projects. If you have any ideas on improving what you see here, I'd be happy to discuss with you.

__Disclamer: None of the code you see here is production ready. I recommend running this connected to a private Ethereum network, so that incase there is a bug, nothing of value will be lost.__

## Getting Started

### Installing
Clone this repository
```
$ git clone
```
Install dependencies
```
$ npm install (This may take a while - Truffle has serious dependency requirements.)
```

While installing packages, take the time to download:
- [MetaMask](https://metamask.io/) to enable your browser to access decentralised apps (dApps).
- [Ganache](http://truffleframework.com/ganache/) to run a personal Ethereum blockchain on your machine.

## Current Features

__Instructions page__ has diagrams, ready for explanations to be added to be more friendly to newcomers.
__ERC20 Contract page__ provides an interface for the [MintableToken](https://openzeppelin.org/api/docs/token_ERC20_MintableToken.html) smart contract by OpenZeppelin. The interface implements the full [ERC20 Specification](https://theethereum.wiki/w/index.php/ERC20_Token_Standard) as well as additional minting functionality.
