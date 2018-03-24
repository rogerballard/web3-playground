import React, { Component } from 'react'
import { Icon, List, Segment } from 'semantic-ui-react'

class TokenDetail extends Component {
  render () {
    const {
      name,
      symbol,
      decimals,
      totalSupply,
      owner,
      mintingFinished,
      visible
    } = this.props

    if (visible === false) return null

    return (
      <Segment>
        <List relaxed='very'>
          <List.Item>
            <Icon name='cubes' />
            <List.Content>
              <List.Header content={symbol + ' - ' + name} />
              <List.Description content={decimals + ' decimals'} />
            </List.Content>
          </List.Item>
          <List.Item>
            <Icon name='user' />
            <List.Content>
              <List.Header content={owner} />
              <List.Description content='Contract owner' />
            </List.Content>
          </List.Item>
          <List.Item>
            <Icon name='circle outline' />
            <List.Content>
              <List.Header content={totalSupply} />
              <List.Description content='Total supply' />
            </List.Content>
          </List.Item>
          <List.Item>
            <Icon name='wizard' />
            <List.Content>
              <List.Header content={'Minting ' +
                (mintingFinished ? 'finished' : 'in progress')}
              />
              <List.Description content={
                mintingFinished
                  ? 'Token supply is locked'
                  : 'Tokens can be created by the owner'}
                />
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    )
  }
}

export default TokenDetail
