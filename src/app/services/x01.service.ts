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


}
