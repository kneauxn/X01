import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DartboardComponent } from './dartboard/dartboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AroundTheClockComponent } from './games/around-the-clock/around-the-clock.component';
import { CricketComponent } from './games/cricket/cricket.component';
import { X01Component } from './games/x01/x01.component';
import { GameHistoryComponent } from './game-history/game-history.component';

@NgModule({
  declarations: [
    AppComponent,
    DartboardComponent,
    ProfileComponent,
    AroundTheClockComponent,
    CricketComponent,
    X01Component,
    GameHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
