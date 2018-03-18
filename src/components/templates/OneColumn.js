import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

const OneColumn = props => (
  <Container>
    <Grid>
      <Grid.Row>
        {props.topComponent}
      </Grid.Row>
      <Grid.Row style={{ marginTop: '4em' }}>
        <Grid.Column width={16}>
          {props.contentComponent}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default OneColumn
