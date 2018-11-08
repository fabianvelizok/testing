import { getColors, getFruits } from '../src/arrays';

describe('Arrays', () => {
  const colors = getColors();
  const fruits = getFruits();

  test('fruits contain an apple', () => {
    expect(fruits).toContain('apple');
  });
  test('fruits does not contain a banana', () => {
    expect(fruits).not.toContain('banana');
  });
  test('fruits have 3 items', () => {
    expect(fruits).toHaveLength(3);
  });
  test('colors have 2 items', () => {
    expect(colors).toHaveLength(2);
  });
});
