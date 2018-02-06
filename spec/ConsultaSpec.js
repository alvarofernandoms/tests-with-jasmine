describe('Consulta', () => {
  it('deve retornar zero para o preço de um retorno', () => {
    var fulano = new Paciente('Fulano', 26, 80, 1.9);
    var consulta = new Consulta(fulano, [], false, true);

    expect(consulta.preco()).toEqual(0);
  }),

  it('deve retornar 25 para procedimentos comuns', () => {
    var fulano = new Paciente('Fulano', 26, 80, 1.9);
    var consulta = new Consulta(fulano, ['procedimento-comum-1', 'procedimento-comum-2'], false, false);

    expect(consulta.preco().toEqual(50));
  }),

  it('deve retornar o dobro para raio-x e gesso no particular', () => {
    var fulano = new Paciente('Fulano', 26, 80, 1.9);
    var consulta = new Consulta(fulano, ['gesso', 'raio-x'], true, false);

    expect(consulta.preco().toEqual(174));
  })

})