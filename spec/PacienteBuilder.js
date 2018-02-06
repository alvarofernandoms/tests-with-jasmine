function PacienteBuilder() {
  var nome = 'Fulano';
  var idade = 26;
  var peso = 80;
  var altura = 1.9;

  var clazz = {
    comNome : function (valor) {
      nome = valor;
      return this;
    },
    comIdade : function(valor) {
      idade = valor;
      return this;
    },
    comPesos : function(valor) {
      peso = valor;
      return this;
    },
    comAltura : function(valor) {
      altura = valor;
      return this;
    },
    constroi : function() {
      return new Paciente(nome, idade, peso, altura);
    }
  }
  return clazz;
}