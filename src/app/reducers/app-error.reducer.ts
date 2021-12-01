import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/app.actions';
export interface AppErrorState {
  hasError: boolean;
  message?: string;
  feature?: string;
}

const initialState: AppErrorState = {
  hasError: false,
};

export const reducer = createReducer(
  initialState,
  on(actions.applicationError, (s, a) => ({ ...s, hasError: true, message: a.message, feature: a.meta.feature })),
);
