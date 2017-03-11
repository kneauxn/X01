import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { X01Service } from '../services/x01.service'
import {IGame} from "../game";
import {Observable} from "rxjs";


@Component({
  selector: 'app-game-select',
  templateUrl: './game-select.component.html',
  styleUrls: ['./game-select.component.css']
})
export class GameSelectComponent implements OnInit {

  // variable for toggeling the game initialization divs
  gameSelected: string = '';

  // the declariations of the form groups that will handle game initilization/creation
  x01Initialization: FormGroup;

  constructor(private formBuilder: FormBuilder, private _x01Service: X01Service) { }

  ngOnInit() {
    this.x01Initialization = this.formBuilder.group({
      playerOneName: ['', Validators.minLength(1)],
      playerTwoName: ['', Validators.minLength(1)]
    })
  }



}
