import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomWaterComponent } from './room-water.component';

describe('RoomWaterComponent', () => {
  let component: RoomWaterComponent;
  let fixture: ComponentFixture<RoomWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
