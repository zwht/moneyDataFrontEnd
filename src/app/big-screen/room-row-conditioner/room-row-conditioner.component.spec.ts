import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomRowConditionerComponent } from './room-row-conditioner.component';

describe('RoomRowConditionerComponent', () => {
  let component: RoomRowConditionerComponent;
  let fixture: ComponentFixture<RoomRowConditionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomRowConditionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomRowConditionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
