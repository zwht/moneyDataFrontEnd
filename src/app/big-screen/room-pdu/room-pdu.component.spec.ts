import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPduComponent } from './room-pdu.component';

describe('RoomPduComponent', () => {
  let component: RoomPduComponent;
  let fixture: ComponentFixture<RoomPduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomPduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
