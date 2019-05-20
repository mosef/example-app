import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Counter from '../Counter';

afterEach(cleanup); // Unmount the component after each test that runs

test(`<Counter />`, () => {
  const { debug, getByTestId } = render(<Counter />);
  const counterButton = getByTestId('counter-button');
  debug(); // Examine the dom node as a string

  expect(counterButton.tagName).toBe('BUTTON'); // Assert the counter button is a button

  expect(counterButton.textContent).toBe('0'); // Assert the counter button starts at 0

  fireEvent.click(counterButton); // Assert the counter button's onClick event fires
  expect(counterButton.textContent).toBe('1'); //Assert the counter updates +1

  fireEvent.click(counterButton); // Assert the counter button's onClick event fires
  expect(counterButton.textContent).toBe('2'); //Assert the counter updates +1

  debug(); // Examine the dom node as a string
});
