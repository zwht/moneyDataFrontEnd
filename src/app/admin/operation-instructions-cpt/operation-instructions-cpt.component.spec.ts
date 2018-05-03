import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationInstructionsCptComponent } from './operation-instructions-cpt.component';

describe('OperationInstructionsCptComponent', () => {
  let component: OperationInstructionsCptComponent;
  let fixture: ComponentFixture<OperationInstructionsCptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationInstructionsCptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationInstructionsCptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
