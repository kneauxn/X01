import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

import {IGame} from "../game";


@Injectable()
export class X01Service {
  private _gamesUrl = 'http://localhost:8000/api/games';

  constructor(private http: Http) {
  }

  getGame(id: number): Observable<IGame> {
    // this wont work until I update the API to be able to sort by ID
    const url = '${this._gamesUrl}/${id}';
    return this.http.get(url)
      .map(this.extractData);
  }

  createX01Game(game: IGame): Observable<IGame> {
    return this.http.post(this._gamesUrl, game)
      .map(this.extractData);
  }

  initializeX01Game(): IGame {
    return {
      id: 0,
      gameNumber: 0,
      playerOne: 'ONE',
      playerTwo: 'TWO',
      playerOneScore: 301,
      playerOneThrows: [],
      playerTwoScore: 301,
      playerTwoThrows: [],
      gameType: 'X01',
      gameWinner: '',
      gameLoser: '',
      gameComplete: false,
    }
  }

  private extractData(response: Response) {
    let body = response.json();
    return body.data || {};
  }

}
