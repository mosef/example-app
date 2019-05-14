import { total } from '../total';
import { add } from '../add';

// Example: Mocking a function / dependency
// First we use jest.mock to mock our dependency
jest.mock('../add', () => ({
  add: jest.fn(() => 25)
  // We're saying that the function inside this dependency returns a value of 25
}));

// Then we mock the function and it's dependency
test('Mock Function', () => {
  expect(total(5, 20)).toBe('$25');
  // the total function we imported runs BUT when when total attempts to call the
  // add function within it, jest supplies our add dependency and calls IT instead.
  expect(add).toHaveBeenCalledTimes(1); // This now refers to our add dependency we're mocking.
  add.mockImplementation(() => 30); // This can change the value mid way through the tests if we ever need it to
  expect(total(5, 25)).toBe('$30'); // Total calls the updated value of add once again and it now returns 30
  expect(add).toHaveBeenCalledTimes(2);
});

// NOTE: The total function looks like this:
// export const total = (shipping, subTotal) => { return '$' + add(shipping, subTotal);};

// When we define our dependency here in the test file, we change that function to read like this:
// export const total = (shipping, subTotal) => { return '$' + add};

// In this case we're now ignoring our arguments in the total function and calling add from our jest.mock dependency list which
// returns a static value of 25 at first and 30 halfway through testing.
// You can observe this in the following test where the value based on arguments should === 1000 but sintead equal 30:
test('Mock Function', () => {
  expect(total(500, 500)).toBe('$30');
  // See, we're no longer using the add function defined in total.js, as a result "$" + (Our mockDependency) is what occurs.
});
