describe('Consulta', () => {

  var fulano;

  beforeEach(function() {
    fulano = new PacienteBuilder().constroi();
  });

  describe('consulta que é um retorno', () => {
    it('deve retornar zero para o preço de um retorno', () => {
      var consulta = new Consulta(fulano, [], false, true);
  
      expect(consulta.preco()).toEqual(0);
    })
  })

  describe('consultas com procedimentos', () => {
    it('deve retornar 25 para procedimentos comuns', () => {
      var consulta = new Consulta(fulano, ['procedimento-comum-1', 'procedimento-comum-2'], false, false);
  
      expect(consulta.preco().toEqual(50));
    }),
  
    it('deve retornar o dobro para raio-x e gesso no particular', () => {
      var consulta = new Consulta(fulano, ['gesso', 'raio-x'], true, false);
  
      expect(consulta.preco().toEqual(174));
    })
  })

})