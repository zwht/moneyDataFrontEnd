import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineRoomComponent } from './machine-room.component';

describe('MachineRoomComponent', () => {
  let component: MachineRoomComponent;
  let fixture: ComponentFixture<MachineRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
