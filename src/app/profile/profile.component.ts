import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title: string = 'Board History';
  games: any[] = [
    {
      "gameNumber": 1,
      "gameWinner": "Ryan",
      "gameType": "xyz"
    },
    {
      "gameNumber": 2,
      "gameWinner": "Ryan",
      "gameType": "xyz"
    }
];

  constructor() { }

  ngOnInit() {
  }

}
