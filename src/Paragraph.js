import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

storiesOf('Paragraph', module)
  .add('with text', () => <Paragraph text={"action"} onClick={action('clickedddd')} />)
  .add('with some emoji', () => (
    <Paragraph text={"😀 😎 👍 💯"} />
  ));

class Paragraph extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
        <p>{this.props.text}</p>
    );
  }
}

export default Paragraph;