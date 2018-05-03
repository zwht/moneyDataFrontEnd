import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomConditionerComponent } from './room-conditioner.component';

describe('RoomConditionerComponent', () => {
  let component: RoomConditionerComponent;
  let fixture: ComponentFixture<RoomConditionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomConditionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomConditionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
