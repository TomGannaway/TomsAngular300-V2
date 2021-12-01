import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicEntryComponent } from './topic-entry.component';

describe('TopicEntryComponent', () => {
  let component: TopicEntryComponent;
  let fixture: ComponentFixture<TopicEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
