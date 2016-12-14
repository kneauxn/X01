import { Component } from '@angular/core';
import { HistoryService } from './service/history.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // so the HistoryService is REGISTERED here but still needs to be INJECTED into the child component(s) where it will be used!!
  providers: [HistoryService]
})
export class AppComponent {
  title = 'Dartboard Scorecard';
}
