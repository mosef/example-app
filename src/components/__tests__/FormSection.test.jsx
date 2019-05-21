import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import FormSection from '../FormSection';

afterEach(cleanup);

test('<FormSection>', () => {
  const { debug, getByTestId, queryByTestId, container, getByText } = render(
    <FormSection />
  );
  expect(getByTestId('page-title').textContent).toBe('New Form');
  expect(queryByTestId('form')).toBeTruthy();
  debug();
  expect(container.firstChild).toMatchSnapshot();
});
