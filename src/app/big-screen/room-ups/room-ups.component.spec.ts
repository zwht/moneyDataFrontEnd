import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomUpsComponent } from './room-ups.component';

describe('RoomUpsComponent', () => {
  let component: RoomUpsComponent;
  let fixture: ComponentFixture<RoomUpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomUpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomUpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
