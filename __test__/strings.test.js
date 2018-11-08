describe('Strings', () => {
  const str = 'Hello world';

  test('str contains the insensitive word "hello"', () => {
    expect(str).toMatch(/hello/i);
  })
  test('str does not contain the word "!"', () => {
    expect(str).not.toMatch(/!/);
  })
})
