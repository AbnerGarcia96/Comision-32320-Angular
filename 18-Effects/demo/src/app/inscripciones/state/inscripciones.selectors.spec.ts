import * as fromInscripciones from './inscripciones.reducer';
import { selectInscripcionesState } from './inscripciones.selectors';

describe('Inscripciones Selectors', () => {
  it('should select the feature state', () => {
    const result = selectInscripcionesState({
      [fromInscripciones.inscripcionesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
