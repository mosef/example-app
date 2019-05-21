import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Form from '../Form';

afterEach(cleanup);

const onSubmit = jest.fn();

test('<FormSection>', () => {
  const { debug, getByTestId, queryByTestId, container, getByText } = render(
    <Form submitForm={onSubmit} />
  );
  expect(queryByTestId('form')).toBeTruthy();
  fireEvent.click(getByText('Submit'));
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
