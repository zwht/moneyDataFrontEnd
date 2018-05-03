import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomEpsComponent } from './room-eps.component';

describe('RoomEpsComponent', () => {
  let component: RoomEpsComponent;
  let fixture: ComponentFixture<RoomEpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomEpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomEpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
