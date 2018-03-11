/**
 * Import dependencies
 */
import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'

import BasePage from '../templates/BasePage'
import TokenForm from '../organisms/TokenForm'
import TokenContract from '../organisms/TokenContract'
import TokenContractList from '../organisms/TokenContractList'

/**
 * Define Token page
 * @extends Component
 */
class Token extends Component {
  /**
   * Render the component
   */
  render () {
    return (
      <BasePage>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <h2>Create</h2>
              {this._renderCreateForm()}
            </Grid.Column>
            <Grid.Column width={4}>
              <h2>Select</h2>
              {this._renderDeployedContracts()}
            </Grid.Column>
            <Grid.Column width={8}>
              <h2>Interact</h2>
              {this._renderContract()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </BasePage>
    )
  }
  /**
   * Render the TokenForm component
   * @return {JSX}
   */
  _renderCreateForm () {
    return (
      <Segment>
        <TokenForm />
      </Segment>
    )
  }

  _renderDeployedContracts () {
    return (
      <TokenContractList />
    )
  }

  _renderContract () {
    return (
      <Segment>
        <TokenContract />
      </Segment>
    )
  }
}

export default Token
