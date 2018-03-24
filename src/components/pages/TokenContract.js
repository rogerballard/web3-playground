import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'

import AppBar from '../containers/AppBar'
import ConnectTokenForm from '../containers/ConnectTokenForm'
import DeployTokenForm from '../containers/DeployTokenForm'
import TokenDetail from '../containers/TokenDetail'
import TokenContractInterface from '../organisms/TokenContractInterface'

class TokenContract extends Component {
  render () {
    return (
      <Container>
        <Grid relaxed='very'>
          <Grid.Row>
            <AppBar />
          </Grid.Row>
          <Grid.Row style={{ marginTop: '4em' }}>
            <Grid.Column width={16}>
              <h1>Token Contract</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row divided>
            <Grid.Column width={8}>
              <DeployTokenForm />
            </Grid.Column>
            <Grid.Column width={8}>
              <ConnectTokenForm />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <TokenDetail />
            </Grid.Column>
            <Grid.Column width={10}>
              <TokenContractInterface />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default TokenContract
