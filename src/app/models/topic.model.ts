import { TopicEntity } from '../reducers/topics.reducer';

export interface TopicModel {
  entity: TopicEntity;
  meta: {
    isTemporary: boolean;
  };
}
