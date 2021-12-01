import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDisplayComponent } from './account-display.component';

describe('AccountDisplayComponent', () => {
  let component: AccountDisplayComponent;
  let fixture: ComponentFixture<AccountDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
