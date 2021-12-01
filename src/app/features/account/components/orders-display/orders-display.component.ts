import { Component, Input, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { OrderInfo } from '../../account-info.redux-feature';

@Component({
  selector: 'app-orders-display',
  templateUrl: './orders-display.component.html',
  styleUrls: ['./orders-display.component.scss'],
})
export class OrdersDisplayComponent implements OnInit {
  @Input() loaded: boolean | null = false;
  @Input() orders: OrderInfo[] | null = [];
  dark$ = this.darkModeService.dark();
  theme = {
    opacity: 1,
    filter: 'blur(6px)',
  };
  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {}
}
