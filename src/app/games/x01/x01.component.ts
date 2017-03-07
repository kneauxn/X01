import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms'

// import  { ThrowValidators } from '../throw.validator'

function throwValidator(c: AbstractControl): {[key: string]: boolean | null} {
  // an array of non-numerical characters that are valid as the first character of an input
  let validAlphas = ['s', 'd', 't', 'b'];
  let isMultiplied = false;
  // just to make things easier 'db' is valid always. This one breaks the patterns so I want to just get it out of the way
  if (c.value.toLowerCase() === 'db') {
    return null;
  }
  // the first character must be either a number or a multiplier value
  // if it isn't a number...
  if (isNaN(c.value.charAt(0))) {
    // loop through the array of acceptable alternatives...
    for (let i = 0; i < validAlphas.length; i++) {
      // and if you find one...
      if (c.value.charAt(0) === validAlphas[i]){
        // set this var true
        isMultiplied = true;
      }
    }
    if(isMultiplied === false) {
      return {'firstCharInv': true};
    }
  }
  // the first character can be a multiplier character, and so an alpha character, but not any of the other characters
  if (isNaN(c.value.slice(1))) {
    return {'invChar': true};
  }
  // the input numbers must be within the allowed range
  if(isNaN(c.value.charAt(0))) {
    if(c.value.slice(1) > 20) {
      return {'invRange': true}
    }
  }
  else {
    if(c.value > 20) {
      return {'invRange': true}
    }
  }
  return null;
}

@Component({
  selector: 'app-x01',
  templateUrl: './x01.component.html',
  styleUrls: ['./x01.component.css']
})
export class X01Component implements OnInit {

  turnInput: FormGroup;
  turnInput2: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.turnInput = this.formBuilder.group({
      throw1Var: ['', throwValidator],
      throw2Var: ['', throwValidator],
      throw3Var: ['', throwValidator]
    });
    this.turnInput2 = this.formBuilder.group({
      throw1Var: ['', throwValidator],
      throw2Var: ['', throwValidator],
      throw3Var: ['', throwValidator]
    });
  }

}
