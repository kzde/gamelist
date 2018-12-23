import gamesObj from '../games.json';
const { games } = gamesObj

export const getGameDetailsByName = name => games.find(game => game.name === name);
