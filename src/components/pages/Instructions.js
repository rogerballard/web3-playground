import React, { Component } from 'react'
import { Container, Grid, Header, Image, Segment } from 'semantic-ui-react'

import AppBar from '../containers/AppBar'

class Instructions extends Component {
  render () {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <AppBar />
          </Grid.Row>
          <Grid.Row style={{ marginTop: '4em' }}>
            <Grid.Column>
              <Header
                as='h1'
                content='Instructions'
                subheader='Connecting to an Ethereum network'
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Segment>
                <Header
                  as='h2'
                  content='MetaMask'
                  subheader='Who is this spooky fox, and what does he do?'
                  image={<Image src='https://metamask.io/img/metamask.png' />}
                />
                <p>
                  MetaMask acts as a bridge between your browser and an Ethereum network, allowing you to transact with other users, and interact with decentralised applications (dApps) that run on the blockchain.
                </p>
                <p>
                  MetaMask stores your account's private key in a secure vault on your machine, with which you can interact with dApps.
                </p>
                <p>
                  For more information, visit the <a href='https://metamask.io'>MetaMask website</a>.
                </p>
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment>
                <Header
                  as='h2'
                  content='Ganache'
                  subheader='Running a tasty private Ethereum network'
                  image={<Image src='https://raw.githubusercontent.com/trufflesuite/ganache/new_ui/resources/icons/png/128x128.png' />}
                />
                <p>
                  Ganache is a development tool that enables you to run a private blockchain on your machine, along with a friendly UI for configuration and monitoring.
                </p>
                <p>
                  Running your own blockchain is recommended while interacting with this dApp. Ganache provides you with 10 accounts, each with 100 ETH for development.
                </p>
                <p>
                  For more information, visit the <a href='http://truffleframework.com/ganache/'>Ganache website</a>.
                </p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Instructions
