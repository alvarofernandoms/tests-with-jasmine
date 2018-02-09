describe('Agendamento', function() {
  var agenda;

  beforeEach(function() {
    agenda = new Agendamento();
    fulano = new PacienteBuilder().constroi();
  });

  it('deve agendar para 20 dias depois', function() {
    var consulta = new Consulta(fulano, [], false, false, new Date(2018, 1, 1));
    var novaConsulta = agenda.para(consulta);

    expect(novaConsulta.getData().toString()).toEqual(new Date(2018, 1, 21).toString());
  });
})