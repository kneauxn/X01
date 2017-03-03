import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../service/history.service'
import { IGame } from '../game'


@Component({
  selector: 'app-board-history',
  templateUrl: 'board-history.component.html',
  styleUrls: ['board-history.component.css']
})
export class BoardHistoryComponent implements OnInit {
  title: string = 'Board History';
  games: IGame[];
  errorMessage: string;

  constructor(private _historyService: HistoryService) {

  }

  ngOnInit(): void {
    this._historyService.getGames()
      .subscribe(
        games => this.games = games,
        error => this.errorMessage = <any>error);
  }

}
