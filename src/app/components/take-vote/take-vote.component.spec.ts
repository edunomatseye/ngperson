import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeVoteComponent } from './take-vote.component';

describe('TakeVoteComponent', () => {
  let component: TakeVoteComponent;
  let fixture: ComponentFixture<TakeVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
