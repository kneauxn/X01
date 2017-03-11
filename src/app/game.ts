export interface IGame {
  id: number,
  gameNumber: number,
  playerOne: string,
  playerTwo: string,
  playerOneScore: number,
  playerOneThrows: any,
  playerTwoScore: number,
  playerTwoThrows: any,
  gameType: string,
  gameWinner: string,
  gameLoser: string,
  gameComplete: boolean,
}
