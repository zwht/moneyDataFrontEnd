import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleRightComponent } from './title-right.component';

describe('TitleRightComponent', () => {
  let component: TitleRightComponent;
  let fixture: ComponentFixture<TitleRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
