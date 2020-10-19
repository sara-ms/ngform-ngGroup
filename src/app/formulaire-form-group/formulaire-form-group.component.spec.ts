import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireFormGroupComponent } from './formulaire-form-group.component';

describe('FormulaireFormGroupComponent', () => {
  let component: FormulaireFormGroupComponent;
  let fixture: ComponentFixture<FormulaireFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
