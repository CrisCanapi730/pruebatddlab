import sumar from './sumador.js';
import sumar2 from './sumador2.js';


describe('Devolver', () => {
  it('Deberia devolver un numero pasado porr parametrooo', () => {
    expect(sumar(1)).toEqual(1);
  });
});

describe('Sumar dos numeros', () => {
  it('deberia sumar dos numeros', () => {
    expect(sumar2(4,5)).toEqual(9);
  });
});


