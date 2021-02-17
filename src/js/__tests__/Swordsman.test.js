import Swordsman from '../Swordsman';

test('Swordsman creation test', () => {
  const expectedObject = {
    name: 'Fourth',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Swordsman('Fourth', 'Swordsman')).toEqual(expectedObject);
});
