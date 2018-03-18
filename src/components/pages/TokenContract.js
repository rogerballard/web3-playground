import React, { Component } from 'react'
import { Container, Grid, Segment } from 'semantic-ui-react'

import AppBar from '../containers/AppBar'
import TokenForm from '../containers/TokenForm'

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
              <Segment>
                <TokenForm />
              </Segment>
            </Grid.Column>
            <Grid.Column width={12}>
              <Segment>
                Right
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default TokenContract
