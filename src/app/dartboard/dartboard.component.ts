import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dartboard',
  templateUrl: './dartboard.component.html',
  styleUrls: ['./dartboard.component.css']
})
export class DartboardComponent implements OnInit {
  chosenGame: string[] = [];

  setGameType1(): void {
    this.chosenGame[0] = 'X01';
     
  }
  setGameType2(): void {
    this.chosenGame[0] = 'Cricket';
  }
  setGameType3(): void {
    this.chosenGame[0] = 'Around the Clock';
  }
  resetGame(): void {
    this.chosenGame = [];
  }

constructor() { }

  ngOnInit() {
  }
}
