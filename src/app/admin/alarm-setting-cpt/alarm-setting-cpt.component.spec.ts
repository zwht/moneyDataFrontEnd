import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmSettingCptComponent } from './alarm-setting-cpt.component';

describe('AlarmSettingCptComponent', () => {
  let component: AlarmSettingCptComponent;
  let fixture: ComponentFixture<AlarmSettingCptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmSettingCptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmSettingCptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
