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

  getGames(): Observable<IGame[]> {
    return this._http.get(this._gamesUrl)
      .map((response: Response) => <IGame[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private createGame(game: IGame, options: RequestOptions): Observable<IGame> {
    game.id = undefined;
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
