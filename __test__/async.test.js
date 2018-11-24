import { getData } from '../src/promise';

const MOCKY_API = 'http://www.mocky.io/v2';
const HTTP_STATUS_API = 'http://httpstat.us';

describe('Async/Await', () => {
  const expectedResult = [
    'Item 1',
    'Item 2'
  ];

  test('Mock API should return 2 items', async () => {
    const response = await getData(`${MOCKY_API}/5becd53d3300002255fbc51d`);
    expect(response.length).toBeGreaterThan(1);
  });

  test('Http status API should return a 500 error', async () => {
    try {
      await getData(`${HTTP_STATUS_API}/500`);
    } catch(error) {
      expect(error).toEqual(new Error('Request failed with status code 500'));
    }
  });
});
