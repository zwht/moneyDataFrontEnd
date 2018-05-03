import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataChartsCptComponent } from './data-charts-cpt.component';

describe('DataChartsCptComponent', () => {
  let component: DataChartsCptComponent;
  let fixture: ComponentFixture<DataChartsCptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataChartsCptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataChartsCptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
