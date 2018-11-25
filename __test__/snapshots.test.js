import { person, randomPerson } from '../src/snapshots';

describe('Snapshots', () => {
  it('Person snapshot should not change', () => {
    expect(person).toMatchSnapshot();
  })

  it('RandomPerson snapshot should change', () => {
    expect(randomPerson).toMatchSnapshot({
      id: expect.any(Number),
      lastName: expect.any(String)
    });
  })
});
