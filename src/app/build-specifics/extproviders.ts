import { APP_INITIALIZER } from '@angular/core';
import { initializeApp } from '../mocks/initializeapp';

export const extProviders = [
  {
    provide: APP_INITIALIZER,
    useFactory: () => initializeApp,
    multi: true,
  },
];
