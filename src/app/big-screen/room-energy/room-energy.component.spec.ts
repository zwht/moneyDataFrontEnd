import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomEnergyComponent } from './room-energy.component';

describe('RoomEnergyComponent', () => {
  let component: RoomEnergyComponent;
  let fixture: ComponentFixture<RoomEnergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomEnergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
