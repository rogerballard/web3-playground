import React, { Component } from 'react'
import { Dropdown, Form, Grid, Header, Icon, Segment } from 'semantic-ui-react'

class ConnectTokenForm extends Component {
  render () {
    const {
      onChange,
      onSubmit,
      loading,
      disabled,
      address,
      deployedContracts,
      error
    } = this.props

    return (
      <Segment disabled={disabled} loading={loading}>
        <Header as='h3' icon='plug' content='Connect To Contract' />
        <p>Connect to an existing contract on the blockchain.</p>
        <Form onSubmit={onSubmit}>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Dropdown
                  placeholder='Select Contract'
                  fluid
                  search
                  selection
                  options={deployedContracts}
                  onChange={onChange}
                  value={address}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form.Button content='Connect to Contract' primary />
                {error !== null
                  ? (<Segment color='red'>
                      <Icon name='warning' /> {error}
                    </Segment>)
                  : null}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    )
  }
}

export default ConnectTokenForm
