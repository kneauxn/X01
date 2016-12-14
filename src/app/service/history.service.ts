import { Injectable } from '@angular/core';
import { IGame } from '../game'
import { Http, Response } from '@angular/http';

@Injectable()
export class HistoryService {
  getGames(): IGame[] {
    return[
        {
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
  constructor(private _http: Http) { }

}
