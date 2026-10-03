const request = require('supertest');
const baseURL = process.env.BASE_URL || 'http://localhost:3000';

class ApiHelper {
  static async obterTokenAutenticacao(email, senha) {
    const response = await request(baseURL)
      .post('/login')
      .send({ email, senha });
    return response.body.token;
  }

  static async cadastrarAluno(token, dadosAluno) {
    return request(baseURL)
      .post('/alunos')
      .set('Authorization', `Bearer ${token}`)
      .send(dadosAluno);
  }

  static async listarAlunos(token) {
    return request(baseURL)
      .get('/alunos')
      .set('Authorization', `Bearer ${token}`);
  }

  static async buscarAlunoPorId(token, id) {
    return request(baseURL)
      .get(`/alunos/${id}`)
      .set('Authorization', `Bearer ${token}`);
  }

  static async deletarAluno(token, id) {
    return request(baseURL)
      .delete(`/alunos/${id}`)
      .set('Authorization', `Bearer ${token}`);
  }
}

module.exports = ApiHelper;