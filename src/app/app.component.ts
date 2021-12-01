import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadTopics } from './actions/topics.actions';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLate: boolean = new Date().getHours() >= 16;
  dark$!: Observable<boolean>;
  constructor(private darkModeService: DarkModeService, private store: Store) {
    store.dispatch(loadTopics());
  }
  ngOnInit(): void {
    this.dark$ = this.darkModeService.dark();
  }
  toggleDark() {
    this.darkModeService.toggle();
  }
}
