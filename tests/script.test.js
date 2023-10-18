const { expect } = require('@jest/globals');
const { 
  getTwoByConsole,
  getTwoByGenre,
  getGameByConsoleAndGenre,
  getGameByName,
  getGamesByGenre,
 } = require('../src/script');

describe('Script tests', () => {
  describe('getTwoByConsole', () => {
    it('Should return two games by PS2 console', () => {
      const games = getTwoByConsole('PS2');
      expect(games).toHaveLength(2);
      expect(games[0].video_console).toEqual('PS2');
      expect(games[1].video_console).toEqual('PS2');
    });

    it('Should throw and error when the console doesnt exists', () => {
      try {
        getTwoByConsole('CONSOLE');
        throw new Error('other-error');
      } catch (error) {
        expect(error.message).not.toEqual('other-error');
      }
    });
  });

  describe('getTwoByGenre', () => {
    it('Should return two games by Survival Horror genre', () => {
      const games = getTwoByGenre('Survival Horror');
      expect(games).toHaveLength(2);
      for (const game of games) {
        expect(game.genres).toContain('Survival Horror');
      }
    });
    it('Should throw and error when the console doesnt exists', () => {
      try {
        getTwoByGenre('GENRE');
        throw new Error('other-error');
      } catch (error) {
        expect(error.message).not.toEqual('other-error');
      }
    });
  });

  describe('getGameByConsoleAndGenre', () => {
    it('Should return a game for GBA and Sport genre', () => {
      const game = getGameByConsoleAndGenre('GBA', 'Sport');
      expect(game).not.toBeNull();
      expect(game.video_console).toEqual('GBA');
      expect(game.genres).toEqual('Sport');
    });

    it('Should throw and error when the console doesnt exists', () => {
      try {
        getGameByConsoleAndGenre('CONSOLE', 'Sport');
        throw new Error('other-error');
      } catch (error) {
        expect(error.message).not.toEqual('other-error');
      }
    });

    it('Should throw and error when the genre doesnt exists', () => {
      try {
        getGameByConsoleAndGenre('GBA', 'GENRE');
        throw new Error('other-error');
      } catch (error) {
        expect(error.message).not.toEqual('other-error');
      }
    });
  });

  describe('getGameByName', () => {
    it('Should return the Resident evil 2 game', () => {
      const game = getGameByName('Resident Evil 2');
      expect(game).not.toBeNull();
      expect(game.name).toEqual('Resident Evil 2');
    });

    it('Should return undefined when not found', () => {
      const game = getGameByName('Non-Existent');
      expect(game).toBeUndefined();
    });
  });

  describe('getGamesByGenre', () => {
    it('Should return a list of games by Action genre', () => {
      const games = getGamesByGenre('Action');
      for (const game of games) {
        expect(game.genres).toContain('Action');
      }
    });
    it('Should return a empty list when the genre doesnt exists', () => {
      const games = getGamesByGenre('Non-Existent');
      expect(games).toHaveLength(0);
    });
  });
});
