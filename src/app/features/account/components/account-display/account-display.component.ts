import { Component, Input, OnInit } from '@angular/core';
import { AccountInfo } from '../../account-info.redux-feature';

@Component({
  selector: 'app-account-display',
  templateUrl: './account-display.component.html',
  styleUrls: ['./account-display.component.scss'],
})
export class AccountDisplayComponent implements OnInit {
  @Input() account: AccountInfo | null = null;
  constructor() {}

  ngOnInit(): void {}
}
