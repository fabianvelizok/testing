import { getData } from '../src/promise';

const API = 'http://www.mocky.io/v2/5becd53d3300002255fbc51d';

describe('Promises', () => {
  const expectedResult = [
    'Item 1',
    'Item 2'
  ];

  test('Mock API should return 2 items', done => {
    return getData(API).then(response => {
      expect(response.length).toBeGreaterThan(1);
      done();
    });
  });

  test(`Mock API should return ${expectedResult} items`, () => {
    return expect(getData(API)).resolves.toEqual(expectedResult);
  });

  test('A promise should be rejected', () => {
    const rejectedPromise = Promise.reject('Error 401');
    return expect(rejectedPromise).rejects.toMatch('Error');
  });
});
