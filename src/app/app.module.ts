import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DartboardComponent } from './dartboard/dartboard.component';
import { BoardHistoryComponent } from './board-history/board-history.component';
import { AroundTheClockComponent } from './games/around-the-clock/around-the-clock.component';
import { CricketComponent } from './games/cricket/cricket.component';
import { X01Component } from './games/x01/x01.component';
import { GameHistoryComponent } from './game-history/game-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameSelectComponent } from './game-select/game-select.component';

@NgModule({
  declarations: [
    AppComponent,
    DartboardComponent,
    BoardHistoryComponent,
    AroundTheClockComponent,
    CricketComponent,
    X01Component,
    GameHistoryComponent,
    DashboardComponent,
    GameSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'X01', component: X01Component},
      {path: 'Cricket', component: CricketComponent},
      {path: 'AroundTheClock', component: AroundTheClockComponent},
      {path: '', component: DashboardComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
