import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { topicCreated } from 'src/app/actions/topics.actions';
import { selectTopicExists } from 'src/app/reducers';
import { alreadyExistsValidator } from 'src/app/validators/already-exists.validator';
import { disallowedTopicValidator } from 'src/app/validators/topic-not-allowed.validator';
@Component({
  selector: 'app-topic-entry',
  templateUrl: './topic-entry.component.html',
  styleUrls: ['./topic-entry.component.scss'],
})
export class TopicEntryComponent {
  form = this.formBuilder.group({
    description: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(20), disallowedTopicValidator('dancing')],
      asyncValidators: [alreadyExistsValidator(this.store, selectTopicExists)],
    }),
  });

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  get description() {
    return this.form.get('description');
  }

  submit(el: HTMLElement) {
    if (this.form.valid) {
      const description = this.description?.value;
      this.store.dispatch(topicCreated({ description }));
      this.form.reset();
      el.focus();
    }
  }
}
