import { getData } from '../src/promise';

const API = 'http://www.mocky.io/v2/5becd53d3300002255fbc51d';

describe('Async/Await', () => {
  const expectedResult = [
    'Item 1',
    'Item 2'
  ];

  test('Mock API should return 2 items', async () => {
    const response = await getData(API);
    expect(response.length).toBeGreaterThan(1);
  });
});
