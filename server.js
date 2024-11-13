const express = require('express');
const sapCfAxios = require('sap-cf-axios').default; // Importa o sap-cf-axios
const app = express();
const PORT = 8080; // Ou a porta que você preferir

// Configurações de autenticação e URL da API
const sapClient = '110';
const destinationName = 'S4HANA_API_CLFN_PRODUCT_SRV'; // Substitua pelo nome do seu destino configurado no SAP Cloud Foundry

// Cria uma instância do sap-cf-axios para o destino SAP
const axios = sapCfAxios(destinationName);

// Função para obter o CSRF token
async function fetchCsrfToken() {
  try {
    const response = await axios.get('/sap/opu/odata/sap/z_gw_authorization_poc_srv', {
      headers: {
        'x-csrf-token': 'fetch',
        'sap-client': sapClient,
      }
    });

    // Extrai o token e o cookie
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
    // Primeiro, busca o token CSRF
    const { csrfToken, cookie } = await fetchCsrfToken();

    // Define os dados para o POST
    const postData = {
      "Uname": "ZEUS_02",
      "ObjectName": "",
      "StartPurchorg": "",
      "StartPurchgroup": "",
      "EndPurchorg": "",
      "EndPurchgroup": "",
      "Status": false,
      "OrgLevel": [],
      "Objects": [
        {
          "Uname": "",
          "ObjectName": "",
          "Activities": []
        }
      ]
    };

    // Faz a requisição POST com o token CSRF
    const response = await axios.post('/sap/opu/odata/sap/z_gw_authorization_poc_srv/AuthorizationSet', postData, {
      headers: {
        'x-csrf-token': csrfToken,
        'Cookie': cookie,
        'sap-client': sapClient,
        'Content-Type': 'application/json',
      }
    });

    // Envia a resposta do servidor para o cliente
    res.json(response.data);
    console.log('Eder Quadros: ', 'Se chegou aqui funcionou!');
    console.log('Getcookie: ',     cookie);

  } catch (error) {
    console.error('Erro ao fazer a requisição POST:', error.message);
    res.status(500).send('Erro ao fazer a requisição POST');
  }
}

// Rota para acionar a requisição GET e POST   ..
app.post("/serv", callPostWithCsrf);

// Inicia o servidor Express
app.listen(PORT, () => {
  console.log('Servidor rodando');
});