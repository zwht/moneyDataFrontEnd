import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSwitchComponent } from './room-switch.component';

describe('RoomSwitchComponent', () => {
  let component: RoomSwitchComponent;
  let fixture: ComponentFixture<RoomSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
