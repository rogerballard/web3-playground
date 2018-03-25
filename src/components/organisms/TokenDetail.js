import React, { Component } from 'react'
import { Button, Icon, Label, List, Segment } from 'semantic-ui-react'

class TokenDetail extends Component {
  render () {
    const {
      name,
      symbol,
      decimals,
      totalSupply,
      owner,
      mintingFinished,
      contractAddress,
      loading,
      visible,
      fetchData
    } = this.props

    if (visible === false) return null

    return (
      <div>
        <Segment loading={loading}>
          <List relaxed='very'>
            <List.Item>
              <Icon name='cubes' />
              <List.Content>
                <List.Header content={symbol + ' - ' + name} />
                <List.Description content={decimals + ' decimals'} />
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon name='browser' />
              <List.Content>
                <List.Header content={contractAddress} />
                <List.Description content='Contract address' />
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon name='user' />
              <List.Content>
                <List.Header content={owner} />
                <List.Description content='Owner' />
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon name='certificate' />
              <List.Content>
                <List.Header content={totalSupply} />
                <List.Description content='Total supply' />
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon name='unlock' />
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
        <Button
          basic
          primary
          floated='right'
          icon='refresh'
          content='Reload'
          onClick={fetchData}
        />
      </div>
    )
  }
}

export default TokenDetail
