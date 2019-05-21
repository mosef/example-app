import React, { Component } from 'react';
import Form from './Form';

export default class FormSection extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="page-title">New Form</h1>
        <Form />
      </div>
    );
  }
}
