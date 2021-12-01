import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectErrorModel } from 'src/app/reducers';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss'],
})
export class ErrorDisplayComponent implements OnInit {
  model$ = this.store.select(selectErrorModel);
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
