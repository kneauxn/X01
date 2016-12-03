import { Component, OnInit } from '@angular/core';
import { IGame } from '../game'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title: string = 'Board History';
  games: IGame[] = [
    {
    gameNumber: 1,
    playerOne: "Ryan",
    playerTwo: "Tyler",
    playerOneScore: 301,
    playerTwoScore: 298,
    gameType: "X01",
    gameWinner: "Ryan",
    gameLoser: "Tyler"
    },
    {
    gameNumber: 2,
    playerOne: "Tyler",
    playerTwo: "Jared",
    playerOneScore: 22,
    playerTwoScore: 15,
    gameType: "Around the Clock",
    gameWinner: "Tyler",
    gameLoser: "Jared"
    }
];

  constructor() { }

  ngOnInit() {
  }

}
