var MaiorEMenor = require('../src/MaiorEMenor.js');

describe('MaiorEMenor', () => {
  it('deve entender números em ordem sequencial', () => {
    var algoritmo = new MaiorEMenor();
    algoritmo.encontra(5, 15, 7, 9);

    expect(algoritmo.pegaMaior()).toEqual(15);
    expect(algoritmo.pegaMenor()).toEqual(5);
  })
});