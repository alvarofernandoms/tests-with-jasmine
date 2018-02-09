function Agendamento() {
  var clazz = {
    para : function(consulta) {
      var novaData = new Date(2018, 1, 21);
      var novaConsulta = new Consulta(consulta.geNome(), consulta.getProcedimentos(), consulta.isParticular(), consulta.isRetorno(), novaData);

      return novaConsulta;
    }
  };

  return clazz;
}