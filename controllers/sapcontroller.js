// controllers/sapController.js
const axios = require('../config/sapaxios');

// Função para obter o CSRF token
async function fetchCsrfToken(sapClient) {
  try {
    const response = await axios.get('/sap/opu/odata/sap/z_gw_authorization_poc_srv', {
      headers: {
        'x-csrf-token': 'fetch',
        'sap-client': sapClient,
      }
    });

    const csrfToken = response.headers['x-csrf-token'];
    const cookie = response.headers['set-cookie'];
    console.log('CSRF Token:', csrfToken);

    return { csrfToken, cookie };

  } catch (error) {
    console.error('Erro ao obter o CSRF token:', error.message);
    throw error;
  }
}

// Função para fazer a requisição POST usando o token e o cookie
async function callPostWithCsrf(req, res) {
  try {
    const sapClient = req.headers['sap-client'];
    const body = req.body;

    if (!sapClient || !body) {
      return res.status(400).send('Header sap-client e body são obrigatórios');
    }

    const { csrfToken, cookie } = await fetchCsrfToken(sapClient);

    const response = await axios.post('/sap/opu/odata/sap/z_gw_authorization_poc_srv/AuthorizationSet', body, {
      headers: {
        'x-csrf-token': csrfToken,
        'Cookie': cookie,
        'sap-client': sapClient,
        'Content-Type': 'application/json',
      }
    });

    res.json(response.data);
    console.log('Requisição POST realizada com sucesso.');

  } catch (error) {
    console.error('Erro ao fazer a requisição POST:', error.message);
    res.status(500).send('Erro ao fazer a requisição POST');
  }
}

module.exports = {
  callPostWithCsrf,
};
