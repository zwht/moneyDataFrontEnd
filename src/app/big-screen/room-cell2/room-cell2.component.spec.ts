import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCell2Component } from './room-cell2.component';

describe('RoomCell2Component', () => {
  let component: RoomCell2Component;
  let fixture: ComponentFixture<RoomCell2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCell2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCell2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
