import React, { Component } from 'react'
import { Container, Divider, Grid } from 'semantic-ui-react'

import AppBar from '../containers/AppBar'
import ConnectTokenForm from '../containers/ConnectTokenForm'
import DeployTokenForm from '../containers/DeployTokenForm'
import TokenInterface from '../organisms/TokenInterface'

class TokenContract extends Component {
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
          <Grid.Row>
            <Grid.Column width={4}>
              <DeployTokenForm />
              <Divider />
              <ConnectTokenForm />
            </Grid.Column>
            <Grid.Column width={12}>
              <TokenInterface />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default TokenContract
