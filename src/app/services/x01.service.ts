import {Injectable} from "@angular/core";
import {IGame} from "../game";
import {Http, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";


@Injectable()
export class X01Service {
  private _gamesUrl = 'http://localhost:8000/api/games';

  constructor(private _http: Http) {
  }

  private createGame(game: IGame, options: RequestOptions): Observable<IGame> {
    game.id = undefined;
    return this.http.post(this.Url, game, options)
      .map(this.extractData)
      .do(data => console.log('createGame: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  initializeGame(): IGame {
    return {
      gameNumber: 0,
      playerOne: 'PLAYER ONE',
      playerTwo: 'PLAYER TWO',
      playerOneScore: 301,
      playerTwoScore: 301,
      gameType: '301',
      gameWinner: '',
      gameLoser: '',
      gameComplete: false,
    }
  }



}
