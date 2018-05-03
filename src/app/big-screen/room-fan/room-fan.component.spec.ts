import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFanComponent } from './room-fan.component';

describe('RoomFanComponent', () => {
  let component: RoomFanComponent;
  let fixture: ComponentFixture<RoomFanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomFanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomFanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
