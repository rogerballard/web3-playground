import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

const TwoColumn = props => (
  <Container>
    <Grid>
      <Grid.Row>
        {props.topComponent}
      </Grid.Row>
      <Grid.Row style={{ marginTop: '4em' }}>
        <Grid.Column width={6}>
          {props.leftComponent}
        </Grid.Column>
        <Grid.Column width={10}>
          {props.rightComponent}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default TwoColumn
