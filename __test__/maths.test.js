import { add, divide, multiply, subtract } from '../maths';

describe('Maths', () => {
  test('Adds 2 + 3 should be 5', () => {
    expect(add(2, 3)).toBe(5);
  });
  test('Subtracts 4 - 2 should be 2', () => {
    expect(subtract(4, 2)).toBe(2);
  });
  test('Multiplies 3 * 2 should be 6', () => {
    expect(multiply(3, 2)).toBe(6);
  });
  test('Divides 8 / 4 should be 2', () => {
    expect(divide(8, 4)).toBe(2);
  });
});
