import { callback } from '../src/callback';

describe('Callbacks', () => {
  test('currentCallback returns "It a callback"', done => {
    const currentCallback = message => {
      expect(message).toBe('It a callback');
      done();
    }

    callback(currentCallback);
  })
});
