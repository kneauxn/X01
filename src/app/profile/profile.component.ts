import { Component, OnInit } from '@angular/core';
import { IGame } from '../game'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title: string = 'Board History';
  games: IGame[];

  constructor() { }

  ngOnInit() {
  }

}
