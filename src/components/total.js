import { add } from './add';
// The function below is dependent on the function above.
// Testing for this kind of function is known as Integration Testing.
export const total = (shipping, subTotal) => {
  return '$' + add(shipping, subTotal);
};
