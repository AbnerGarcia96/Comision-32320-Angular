import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesComponent } from './estudiantes.component';

describe('EstudiantesComponent', () => {
  let component: EstudiantesComponent;
  let fixture: ComponentFixture<EstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
