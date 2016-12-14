import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../service/history.service'
import { IGame } from '../game'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
