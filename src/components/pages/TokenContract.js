import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Grid, Header, Segment } from 'semantic-ui-react'

import AppBar from '../containers/AppBar'
import DeployTokenForm from '../containers/DeployTokenForm'
import ConnectTokenForm from '../containers/ConnectTokenForm'
import TokenDetail from '../containers/TokenDetail'
import TokenContractInterface from '../containers/TokenContractInterface'

class TokenContract extends Component {
  renderErrorSection () {
    if (this.props.connected) return null
    return (
      <Grid.Row>
        <Grid.Column width={16}>
          <Segment color='red'>
            <Header
              as='h3'
              color='red'
              content='Unlock MetaMask to continue'
              subheader='This page requires a connection to an Ethereum network.'
              icon='warning'
            />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }
  renderConnectSection () {
    if (this.props.initialised) return null
    return (
      <Grid.Row>
        <Grid.Column width={8}>
          <DeployTokenForm />
        </Grid.Column>
        <Grid.Column width={8}>
          <ConnectTokenForm />
        </Grid.Column>
      </Grid.Row>
    )
  }
  renderInterfaceSection () {
    if (!this.props.initialised) return null
    return (
      <Grid.Row>
        <Grid.Column width={6}>
          <TokenDetail />
        </Grid.Column>
        <Grid.Column width={10}>
          <TokenContractInterface />
        </Grid.Column>
      </Grid.Row>
    )
  }
  render () {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <AppBar />
          </Grid.Row>
          <Grid.Row style={{ marginTop: '4em' }}>
            <Grid.Column width={16}>
              <Header as='h1'>
                <Header.Content>
                  ERC20 Token Contract
                </Header.Content>
                <Header.Subheader>
                  Deploy your own ERC20 token. Implements the <a href='https://openzeppelin.org/api/docs/token_ERC20_MintableToken.html' target='_blank'>MintableToken</a> contract by <a href='https://openzeppelin.org/' target='_blank'>OpenZeppelin</a>. Contract source available <a href='https://ethfiddle.com/eooK5U5xGt' target='_blank'>here</a>.
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>
          {this.renderErrorSection()}
          {this.renderConnectSection()}
          {this.renderInterfaceSection()}
        </Grid>
      </Container>
    )
  }
}

const mapState = (state) => ({
  initialised: state.tokenContract.initialised,
  connected: state.account.address !== null
})

export default connect(mapState)(TokenContract)
