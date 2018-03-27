import React, { Component } from 'react'
import { Form, Grid, Header, Label, Segment } from 'semantic-ui-react'

class ContractMethodForm extends Component {
  render () {
    const {
      id,
      onSubmit,
      loading,
      disabled = false,
      header,
      label,
      inputs = [],
      button,
      result
    } = this.props

    return (
      <Segment>
        <Header as='h3' {...header} />
        <Form key={id} onSubmit={onSubmit} loading={loading} disabled={disabled}>
          <Form.Group>
            {inputs.map(input => (
              <Form.Input key={input.key} {...input} disabled={disabled} />
            ))}
          </Form.Group>
          <Grid verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={16}>
                <Form.Button primary {...button} disabled={disabled} />
              </Grid.Column>
            </Grid.Row>
            {result && result.hasValue === true
              ? (<Grid.Row>
                  <Grid.Column width={12}>
                    <Segment color='green' content={result.content} />
                  </Grid.Column>
                </Grid.Row>)
              : null}
          </Grid>
        </Form>
        <Label attached='top right' {...label} />
      </Segment>
    )
  }
}

export default ContractMethodForm
