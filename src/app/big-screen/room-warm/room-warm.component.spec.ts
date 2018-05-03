import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomWarmComponent } from './room-warm.component';

describe('RoomWarmComponent', () => {
  let component: RoomWarmComponent;
  let fixture: ComponentFixture<RoomWarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomWarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomWarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
