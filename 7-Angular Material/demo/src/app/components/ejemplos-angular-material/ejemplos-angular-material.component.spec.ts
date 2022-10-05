import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplosAngularMaterialComponent } from './ejemplos-angular-material.component';

describe('EjemplosAngularMaterialComponent', () => {
  let component: EjemplosAngularMaterialComponent;
  let fixture: ComponentFixture<EjemplosAngularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemplosAngularMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemplosAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
