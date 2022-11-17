import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIncripcionesComponent } from './lista-incripciones.component';

describe('ListaIncripcionesComponent', () => {
  let component: ListaIncripcionesComponent;
  let fixture: ComponentFixture<ListaIncripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaIncripcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaIncripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
