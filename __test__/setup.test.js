afterEach(() => console.log('After each test'));
afterAll(() => console.log('After all tests'));

beforeEach(() => console.log('Before each test'));
beforeAll(() => console.log('Before all tests'));

describe('Setup before executing', () => {
  const str = 'Hello';

  test('str to be truthy', () => {
    expect(str).toBeTruthy();
  })
});
