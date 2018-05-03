import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationNoteCptComponent } from './operation-note-cpt.component';

describe('OperationNoteCptComponent', () => {
  let component: OperationNoteCptComponent;
  let fixture: ComponentFixture<OperationNoteCptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationNoteCptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationNoteCptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
