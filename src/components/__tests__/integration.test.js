import { total } from '../total';
// Example: Integration Test, it tests things working together.
test('Integration Test', () => {
  const value = total(3, 2);
  // expect(value).toBe(5);
  expect(value).toBe('$5');
});
