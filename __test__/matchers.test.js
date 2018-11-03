describe('Matchers', () => {
  const defaultUser = {
    name: 'user',
    lastName: 'user last name'
  };

  const normalUser = {
    name: 'user',
    lastName: 'user last name'
  };

  const premiumUser = {
    name: 'premium user',
    lastName: 'premium user last name'
  };

  test('defaultUser should be equal to normalUser', () => {
    expect(defaultUser).toEqual(normalUser);
  });
  test('defaultUser should not be equal to premiumUser', () => {
    expect(defaultUser).not.toEqual(premiumUser);
  })
})
