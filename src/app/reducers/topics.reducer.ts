import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/topics.actions';
export interface TopicEntity {
  id: string;
  description: string;
}

export interface TopicState extends EntityState<TopicEntity> {}

export const adapter = createEntityAdapter<TopicEntity>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(actions.loadTopicsSucceeded, (s, a) => adapter.setAll(a.payload, s)),
  on(actions.topicSaved, (s, a) => adapter.upsertOne(a.payload, s)),
);

export const { selectAll: selectAllTopics } = adapter.getSelectors();
