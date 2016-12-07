/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AroundTheClockComponent } from './around-the-clock.component';

describe('AroundTheClockComponent', () => {
  let component: AroundTheClockComponent;
  let fixture: ComponentFixture<AroundTheClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AroundTheClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AroundTheClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
