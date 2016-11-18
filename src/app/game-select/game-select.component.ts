import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-select',
  templateUrl: './game-select.component.html',
  styleUrls: ['./game-select.component.css']
})
export class GameSelectComponent implements OnInit {
  title = 'Game Select';
  chosenGame: number[] = [];

  // The functions that change the chosenGame value
  // 1 = X01; 2 = Cricket; 3 = Aroung the Clock
  setGameType1(): void {
    this.chosenGame[0] = 1;
  }
  setGameType2(): void {
    this.chosenGame[0] = 2;
  }
  setGameType3(): void {
    this.chosenGame[0] = 3;
  }

  constructor() { }

  ngOnInit() {
  }

}
