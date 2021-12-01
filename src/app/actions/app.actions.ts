
import { Action, createAction, props } from "@ngrx/store";

export const applicationError = createAction(
  '[app] application error',
  props<{message: string, meta: { feature?: string, originalAction: Action }}>()
);
