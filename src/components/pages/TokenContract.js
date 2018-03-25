import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'

import AppBar from '../containers/AppBar'
import DeployTokenForm from '../containers/DeployTokenForm'
import ConnectTokenForm from '../containers/ConnectTokenForm'
import TokenDetail from '../containers/TokenDetail'
import TokenContractInterface from '../containers/TokenContractInterface'

class TokenContract extends Component {
  renderConnectSection () {
    if (this.props.connectedToContract) return null
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
    if (!this.props.connectedToContract) return null
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
              <h1>Token Contract</h1>
            </Grid.Column>
          </Grid.Row>
          {this.renderConnectSection()}
          {this.renderInterfaceSection()}
        </Grid>
      </Container>
    )
  }
}

const mapState = (state) => ({
  connectedToContract: state.tokenContract.instance !== null
    && state.tokenContract.instance.options.address !== null
})

export default connect(mapState)(TokenContract)
