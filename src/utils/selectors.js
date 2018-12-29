export const getGameDetailsByName = (games, name) => games.find(game => game.name === name);
// eslint-disable-next-line
export const getGamesByPlatform = (games, platform) => games.filter(game => game.platform === platform);
