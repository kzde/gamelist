import * as selectors from '../selectors';

const games = [
  { name: 'Just Dance', platform: 'switch' },
  { name: 'Raymond', platform: 'X1' },
  { name: 'Lapin crètin', platform: 'X1' }
]

describe('getGameDetailsByName', () => {
  it('should return game detail by name', () => {
    expect(selectors.getGameDetailsByName(games, 'Raymond')).toEqual({ name: 'Raymond', platform: 'X1' })
  })
});

describe('getGamesByPlatform', () => {
  it('should return game list by platform', () => {
    const expected_result = [
      { name: 'Raymond', platform: 'X1' },
      { name: 'Lapin crètin', platform: 'X1' }
    ]
    expect(selectors.getGamesByPlatform(games, 'X1')).toEqual(expected_result);
  })
})