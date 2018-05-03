import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomElectricComponent } from './room-electric.component';

describe('RoomElectricComponent', () => {
  let component: RoomElectricComponent;
  let fixture: ComponentFixture<RoomElectricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomElectricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomElectricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
