import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCellComponent } from './room-cell.component';

describe('RoomCellComponent', () => {
  let component: RoomCellComponent;
  let fixture: ComponentFixture<RoomCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
