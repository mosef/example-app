import { add } from './add';

test('will add numbers', () => {
  const value = add(1, 2);
  expect(value).toBe(3);
});
