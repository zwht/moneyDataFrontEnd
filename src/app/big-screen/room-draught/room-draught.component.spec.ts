import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDraughtComponent } from './room-draught.component';

describe('RoomDraughtComponent', () => {
  let component: RoomDraughtComponent;
  let fixture: ComponentFixture<RoomDraughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDraughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDraughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
