import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { accountFeature } from '../../account-info.redux-feature';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders$ = this.store.select(accountFeature.selectOrders);
  loaded$ = this.store.select(accountFeature.selectOrdersLoaded);
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
