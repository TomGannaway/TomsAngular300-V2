import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/topics.actions';
import { TopicEntity } from './topics.reducer';

export interface TempTopicState extends EntityState<TopicEntity> {}

export const adapter = createEntityAdapter<TopicEntity>();

const initialState = adapter.getInitialState();

// Angular and NGRX 13+ you can just export the reducer directly.
// if you are on an earlier version, wrap this up with a function
// The "old skool version" is below
//  const reducerFunction = createReducer(
//   initialState
// );

// export function reducer(state:TempTopicState = initialState, action:Action): TempTopicState {
//   return reducerFunction(state, action);
// }

export const reducer = createReducer(
  initialState,
  on(actions.tempTopicCreated, (s, a) => adapter.addOne(a.payload, s)),
  on(actions.topicSaved, (s, a) => adapter.removeOne(a.meta.oldId, s)),
  on(actions.topicSavedFailure, (s, a) => adapter.removeOne(a.payload.id, s)),
);

export const { selectAll: selectAllTempTopics } = adapter.getSelectors();
