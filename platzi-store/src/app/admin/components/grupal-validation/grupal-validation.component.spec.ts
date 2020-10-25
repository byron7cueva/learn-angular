import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupalValidationComponent } from './grupal-validation.component';

describe('GrupalValidationComponent', () => {
  let component: GrupalValidationComponent;
  let fixture: ComponentFixture<GrupalValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupalValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupalValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
