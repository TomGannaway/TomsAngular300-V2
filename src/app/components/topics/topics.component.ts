import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TopicModel } from 'src/app/models';
import { selectAllMergedTopics } from 'src/app/reducers';
import { TopicEntity } from 'src/app/reducers/topics.reducer';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss'],
})
export class TopicsComponent implements OnInit {
  topics$!: Observable<TopicModel[]>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.topics$ = this.store.select(selectAllMergedTopics);
  }

  doSomething(topic: TopicEntity) {
    console.log(topic);
  }
}
