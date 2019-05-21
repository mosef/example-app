import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    text: ''
  };
  render() {
    const { submitForm } = this.props;
    const { text } = this.state;
    return (
      <form
        data-testid="form"
        onSubmit={() =>
          submitForm({
            text
          })
        }
      >
        <input type="text" />
        <button>Submit</button>
      </form>
    );
  }
}
