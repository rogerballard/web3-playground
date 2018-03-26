import React, { Component } from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'

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
                subheader='Configuring your connection to a private Ethereum network'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Instructions
