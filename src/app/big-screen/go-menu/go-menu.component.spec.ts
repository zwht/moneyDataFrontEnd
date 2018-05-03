import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoMenuComponent } from './go-menu.component';

describe('GoMenuComponent', () => {
  let component: GoMenuComponent;
  let fixture: ComponentFixture<GoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
