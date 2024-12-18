const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000; // Ou a porta que você preferir

// Configurações de autenticação e URL da API
const sapClient = '110';
const url = 'https://vhudsds4ci.sap.unidasul.com.br:44300/sap/opu/odata/sap/z_gw_authorization_poc_srv/AuthorizationSet';
const url2 = 'https://vhudsds4ci.sap.unidasul.com.br:44300/sap/opu/odata/sap/z_gw_authorization_poc_srv';
const url3 = "https://vhudsds4ci.sap.unidasul.com.br:44300/sap/opu/odata/sap/API_CLFN_PRODUCT_SRV/A_ProductCharcValue(Product='000000000001021347',ClassType='026',CharcInternalID='883',CharcValuePositionNumber='1')"
// Função para obter o CSRF token
async function fetchCsrfToken() {
  try {
    const response = await axios.get(url2, {
      headers: {
        'x-csrf-token': 'fetch',
        'sap-client': sapClient ,
        "Authorization" :"Basic ************"
      }//,
     // auth: {
     //   username: '179045',  // Substitua pelo seu nome de usuário
     //   password: 'Unidasul@2020'   // Substitua pela sua senha
     // }
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
    const response = await axios.post(url, postData, {
      headers: {
        'x-csrf-token': csrfToken,
        'Cookie': cookie,
        'sap-client': sapClient,
        'Content-Type': 'application/json',
        "Authorization" :"Basic ********************"
      }//,
    //  auth: {
     //   username: '179045',  // Substitua pelo seu nome de usuário
    //    password: 'Unidasul@2020'   // Substitua pela sua senha
    //  }
    });

    // Envia a resposta do servidor para o cliente
    res.json(response.data);

  } catch (error) {
    console.error('Erro ao fazer a requisição POST:', error.message);
    res.status(500).send('Erro ao fazer a requisição POST');
  }
}

// Rota para acionar a requisição GET e POST
app.post("/serv", callPostWithCsrf);

// Inicia o servidor Express
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
