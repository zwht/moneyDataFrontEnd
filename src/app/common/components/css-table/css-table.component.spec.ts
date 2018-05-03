import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTableComponent } from './css-table.component';

describe('CssTableComponent', () => {
  let component: CssTableComponent;
  let fixture: ComponentFixture<CssTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
