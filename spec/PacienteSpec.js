describe('Paciente', () => {
  it('deve retornar o IMC', () => {
    var fulano = new Paciente('Fulano', 26, 80, 1.9);

    expect(fulano.imc()).toEqual(80 / (1.9 * 1.9));
  }),

  it('deve retornar o total de batimentos durante toda a vida do fulano', () => {
    var fulano = new Paciente('Fulano', 26, 80, 1.9);

    expect(fulano.batimentos()).toEqual(26 * 365 * 24 * 60 * 80);
  })
})