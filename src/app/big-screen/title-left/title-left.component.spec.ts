import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleLeftComponent } from './title-left.component';

describe('TitleLeftComponent', () => {
  let component: TitleLeftComponent;
  let fixture: ComponentFixture<TitleLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
