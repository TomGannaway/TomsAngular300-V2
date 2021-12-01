import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { ApplicationErrorModel, TopicModel } from '../models';
import { ExistenceCheckSelector } from '../validators/already-exists.validator';
import * as fromAppErrors from './app-error.reducer';
import * as fromTempTopics from './temp-topics.reducer';
import * as fromTopics from './topics.reducer';

export interface AppState {
  topics: fromTopics.TopicState;
  tempTopics: fromTempTopics.TempTopicState;
  applicationErrors: fromAppErrors.AppErrorState;
}

export const reducers: ActionReducerMap<AppState> = {
  topics: fromTopics.reducer,
  tempTopics: fromTempTopics.reducer,
  applicationErrors: fromAppErrors.reducer,
};

// Feature selector (since we are in the app feature - the root)
// we are, for purposes of selectors, going to consider each 'branch' of the state a 'feature'

const selectTopicsState = createFeatureSelector<fromTopics.TopicState>('topics');
const selectTempTopicsState = createFeatureSelector<fromTempTopics.TempTopicState>('tempTopics');
const selectApplicationErrorState = createFeatureSelector<fromAppErrors.AppErrorState>('applicationErrors');

const selectAllTopicsEntities = createSelector(selectTopicsState, fromTopics.selectAllTopics);

const selectAllTempTopicsEntities = createSelector(selectTempTopicsState, fromTempTopics.selectAllTempTopics);

const selectAllTopics = createSelector(selectAllTopicsEntities, (entities) => entities.map(makeModelFromTopic));
const selectAllTempTopics = createSelector(selectAllTempTopicsEntities, (entities) => entities.map(makeModelFromTopic));

function makeModelFromTopic(topic: fromTopics.TopicEntity) {
  return {
    entity: topic,
    meta: {
      isTemporary: topic.id.toString().startsWith('T'),
    },
  } as TopicModel;
}

export const selectAllMergedTopics = createSelector(selectAllTopics, selectAllTempTopics, (topics, tempTopics) => {
  return [...topics, ...tempTopics];
});
export const selectTopicExists: ExistenceCheckSelector = (props: { value: string }) =>
  createSelector(selectAllTopicsEntities, (topics) =>
    topics.some((t) => t.description.toLocaleLowerCase().trim() === props.value.toLocaleLowerCase().trim()),
  );

export const selectErrorModel = createSelector(selectApplicationErrorState, (s) => {
  return {
    hasError: s.hasError,
    message: s.message + ' (' + s.feature + ')',
  } as ApplicationErrorModel;
});
