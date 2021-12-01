import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DarkModeService {
  private _dark = false;
  private _subject = new BehaviorSubject<boolean>(this._dark);

  constructor() {
    if (
      localStorage['theme'] === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      this._dark = true;
    } else {
      this._dark = false;
      document.documentElement.classList.remove('dark');
    }
    this._subject.next(this._dark);
  }

  toggle(): void {
    document.documentElement.classList.toggle('dark');
    this._dark = !this._dark;
    localStorage['theme'] = this._dark ? 'dark' : 'light';
    this._subject.next(this._dark);
  }

  dark(): Observable<boolean> {
    return this._subject.asObservable();
  }
}
