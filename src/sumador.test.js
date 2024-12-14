import sumar from './sumador.js';

describe('Sumar', () => {
  it('deberia sumar dos numeros', () => {
    expect(sumar(1)).toEqual(1);
  });
});


