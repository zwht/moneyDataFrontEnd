import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomStsComponent } from './room-sts.component';

describe('RoomStsComponent', () => {
  let component: RoomStsComponent;
  let fixture: ComponentFixture<RoomStsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomStsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomStsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
