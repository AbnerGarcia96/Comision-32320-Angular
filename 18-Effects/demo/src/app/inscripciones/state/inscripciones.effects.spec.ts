import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InscripcionesEffects } from './inscripciones.effects';

describe('InscripcionesEffects', () => {
  let actions$: Observable<any>;
  let effects: InscripcionesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InscripcionesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(InscripcionesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
