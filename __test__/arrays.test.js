import { fruits } from '../src/arrays';

describe('Arrays', () => {
  test('fruits contain an apple', () => {
    expect(fruits).toContain('apple');
  });
  test('fruits does not contain a banana', () => {
    expect(fruits).not.toContain('banana');
  });
  test('fruits have 3 items', () => {
    expect(fruits).toHaveLength(3);
  });
});
