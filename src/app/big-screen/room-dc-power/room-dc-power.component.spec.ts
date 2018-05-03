import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDcPowerComponent } from './room-dc-power.component';

describe('RoomDcPowerComponent', () => {
  let component: RoomDcPowerComponent;
  let fixture: ComponentFixture<RoomDcPowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDcPowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDcPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
