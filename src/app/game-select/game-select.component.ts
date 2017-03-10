import { Component, OnInit } from '@angular/core';

import { X01Service } from '../services/x01.service'


@Component({
  selector: 'app-game-select',
  templateUrl: './game-select.component.html',
  styleUrls: ['./game-select.component.css']
})
export class GameSelectComponent implements OnInit {

  gameSelected: string = '';

  constructor(private _x01Service: X01Service) { }

  ngOnInit() {
  }

}
