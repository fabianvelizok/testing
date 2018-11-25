export const lastNames = ['Darell', 'Watson'];

export const person = {
  gender: 'Male',
  id: 1,
  lastName: 'Veliz',
  name: 'Fabian',
};

export const randomPerson = {
  gender: 'Female',
  id: Math.floor(Math.random() * 100),
  lastName: lastNames[Math.floor(Math.random() * 2)],
  name: 'Mary'
};
