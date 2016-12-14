import { Injectable } from '@angular/core';
import { IGame } from '../game'
import { Http, Response } from '@angular/http';

@Injectable()
export class HistoryService {
  getGames(): IGame[] {
    return[
        {
          "_id": "584e58bb9e03bc119a1578cb",
          "gameNumber": 1,
          "playerOne": "Ryan",
          "playerTwo": "Tyler",
          "playerOneScore": 301,
          "playerTwoScore": 298,
          "gameType": "X01",
          "gameWinner": "Ryan",
          "gameLoser": "Tyler"
        },
        {
          "_id": "584e597e9e03bc119a1578cd",
          "gameNumber": 2,
          "playerOne": "Ryan",
          "playerTwo": "Tyler",
          "playerOneScore": 105,
          "playerTwoScore": 301,
          "gameType": "X01",
          "gameWinner": "Tyler",
          "gameLoser": "Ryan"
        },
        {
          "_id": "585114209e03bc0f70becbd8",
          "gameNumber": 3,
          "playerOne": "Ryan",
          "playerTwo": "Jared",
          "playerOneScore": 205,
          "playerTwoScore": 401,
          "gameType": "X01",
          "gameWinner": "Jared",
          "gameLoser": "Ryan"
        }]
    };
  constructor(privet _http: Http) { }

}
