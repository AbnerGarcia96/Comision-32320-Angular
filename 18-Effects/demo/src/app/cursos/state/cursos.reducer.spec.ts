import { reducer, estadoInicial } from './cursos.reducer';

describe('Cursos Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(estadoInicial, action);

      expect(result).toBe(estadoInicial);
    });
  });
});
