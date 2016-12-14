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

  constructor(private _historyService: HistoryService) {
    
  }

  ngOnInit(): void {
    this.games = this._historyService.getGames();
  }

}
