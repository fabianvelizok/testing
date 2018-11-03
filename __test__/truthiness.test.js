describe('Falsy values', () => {
  test('false should be falsy', () => {
    expect(false).toBeFalsy();
  });
  test('undefined should be falsy', () => {
    expect(undefined).toBeFalsy();
  });
  test('null should be falsy', () => {
    expect(null).toBeFalsy();
  });
  test('0 should be falsy', () => {
    expect(0).toBeFalsy();
  });
  test('1 should not be falsy', () => {
    expect(1).not.toBeFalsy();
  });
  test('true should not be falsy', () => {
    expect(true).not.toBeFalsy();
  });
});

describe('Truthy values', () => {
  test('false should not be truthy', () => {
    expect(false).not.toBeTruthy();
  });
  test('undefined should not be truthy', () => {
    expect(undefined).not.toBeTruthy();
  });
  test('null should not be truthy', () => {
    expect(null).not.toBeTruthy();
  });
  test('0 should not be truthy', () => {
    expect(0).not.toBeTruthy();
  });
  test('1 should be truthy', () => {
    expect(1).toBeTruthy();
  });
})
