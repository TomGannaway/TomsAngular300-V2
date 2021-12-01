import { createAction, props } from '@ngrx/store';
import { TopicEntity } from '../reducers/topics.reducer';

export const loadTopics = createAction('[app topics] load topics');

export const loadTopicsSucceeded = createAction(
  '[app topics] load topics succeeded',
  props<{ payload: TopicEntity[] }>(),
);

export const topicCreated = createAction('[app topics] topic created', props<{ description: string }>());

export const tempTopicCreated = createAction('[app topics] temp topic created', props<{ payload: TopicEntity }>());

export const topicSaved = createAction(
  '[app topics] topic saved',
  props<{ payload: TopicEntity; meta: { oldId: string } }>(),
);

export const topicSavedFailure = createAction(
  '[app topics] topics saved failure',
  props<{ payload: TopicEntity; meta: { errorMessage: string; statusCode: string } }>(),
);
