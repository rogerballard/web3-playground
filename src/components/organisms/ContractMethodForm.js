import React, { Component } from 'react'
import { Form, Grid, Header, Label, Segment } from 'semantic-ui-react'

class ContractMethodForm extends Component {
  render () {
    const {
      id,
      onSubmit,
      loading,
      disabled,
      header,
      label,
      inputs,
      button,
      result
    } = this.props

    return (
      <Segment>
        <Form key={id} onSubmit={onSubmit} loading={loading} disabled={disabled}>
          <Header {...header} />
          <Form.Group>
            {inputs.map(input => <Form.Input key={input.key} {...input} />)}
          </Form.Group>
          <Grid verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={4}>
                <Form.Button primary {...button} />
              </Grid.Column>
              <Grid.Column width={4}>
                {result && result.hasValue === true
                  ? <Label content={result.content} size='large' />
                  : null}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
        <Label attached='top right' {...label} />
      </Segment>
    )
  }
}

export default ContractMethodForm
