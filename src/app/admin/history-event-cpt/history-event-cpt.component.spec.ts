import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryEventCptComponent } from './history-event-cpt.component';

describe('HistoryEventCptComponent', () => {
  let component: HistoryEventCptComponent;
  let fixture: ComponentFixture<HistoryEventCptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryEventCptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryEventCptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
