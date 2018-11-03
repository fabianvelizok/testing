describe('Numbers', () => {
  const adds = 0.2 + 0.4;

  test('3 should be greater than 2', () => {
    expect(3).toBeGreaterThan(2);
  });
  test('4 should be greater than or equal 4', () => {
    expect(4).toBeGreaterThanOrEqual(4);
  });
  test('8 should be less than 10', () => {
    expect(8).toBeLessThan(10);
  });
  test('2 should be less than or equal 2', () => {
    expect(2).toBeLessThanOrEqual(2);
  });
  test('5 should not be less than 5', () => {
    expect(5).not.toBeLessThan(5);
  });
  test('Adds 0.2 + 0.4 should be close to 0.6', () => {
    expect(adds).toBeCloseTo(0.6);
  });
  test('Adds 0.2 + 0.4 should not be equal 0.6', () => {
    expect(adds).not.toEqual(0.6);
  });
});
