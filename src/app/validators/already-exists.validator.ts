import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { DefaultProjectorFn, MemoizedSelector, Store } from '@ngrx/store';
import { debounceTime, map, Observable, take } from 'rxjs';

export type ExistenceCheckSelector = (props: {
  value: any;
}) => MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>;

export function alreadyExistsValidator(
  store: Store,
  selector: ExistenceCheckSelector,
  debounce: number = 250,
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return store.select(selector({ value: control.value })).pipe(
      debounceTime(debounce),
      take(1), // if you forget this it won't work. just silently fail.
      map((exists) => (exists ? { exists: true } : null)),
    );
  };
}
