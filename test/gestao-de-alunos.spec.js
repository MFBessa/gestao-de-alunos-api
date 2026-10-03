function gerarAlunoDinamico() {
  const timestamp = Date.now();
  return {
    nome: `Aluno Teste ${timestamp}`,
    email: `aluno_${timestamp}@teste.com`,
    cpf: `${Math.floor(10000000000 + Math.random() * 90000000000)}`,
    turma: 'QA-Automation'
  };
}

module.exports = { gerarAlunoDinamico };