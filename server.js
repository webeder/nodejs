const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const cors = require('cors');
const path = require('path'); // Adicione esta linha
const sapRoutes = require('./routes/saproutes'); // Importa as rotas
const sapRoutes2 = require('./routes/outro'); // Importa as rotas
const productCharcRoutes = require('./routes/productCharcRoutes');

const app = express();
const PORT = process.env.PORT || 8081;

// Middleware
app.use(cors()); // Habilita CORS
app.use(express.json()); // Permite JSON no body

// Definição da documentação do Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Unidasul - SAP",
      version: "1.0.0",
      description: "Middleware"
    },

    servers: [
      {
        url: 'https://mynodejs--random-route-lean-badger-to.cfapps.br10.hana.ondemand.com', // URL base do servidor
        description: 'Servidor de desenvolvimento'
      }
    ]
  },
  apis: ["./routes/*.js"],  // Aponte para as rotas ou arquivos onde você define as APIs
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Servir arquivos estáticos da pasta 'public'
app.use('/public', express.static(path.join(__dirname, 'public')));


// Configurações do Express para usar o EJS como mecanismo de visualização html dinamico usando rotas 
/*
app.set('view engine', 'ejs');
app.set('views', './views');
const mainRoute = require('./routes/mainRoute');
app.use('/', mainRoute);
*/


// Configura as rotas principais
app.use('/v1/serv', sapRoutes);

// Rota de exemplo
app.use('/v1/authorization', sapRoutes2);

app.use('/api', productCharcRoutes); // Registra as rotas no caminho '/api'

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Swagger disponível em http://localhost:${PORT}/api-docs`);
});








/*
// app.js
const express = require('express');

const sapRoutes = require('./routes/saproutes'); // Importa as rotas
const sapRoutes2 = require('./routes/outro'); // Importa as rotas
const path = require('path'); // Adicione esta linha
//const mainRoute = require('./routes/mainRoute');

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json()); // Middleware para interpretar JSON

// Configurações do Express para usar o EJS como mecanismo de visualização
//app.set('view engine', 'ejs');
//app.set('views', './views');

// Servir arquivos estáticos da pasta 'public'
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve arquivos estáticos da pasta "public" (opcional)
//app.use(express.static('public'));

// Importa e usa o módulo de rotas
//app.use('/', mainRoute);




// Configura a rota principal
app.use('/serv', sapRoutes);     
app.use('/v1/authorization', sapRoutes2);
/*


VC DEVE COLOCAR AQUI TODOS AS SUAS ROTAS 









// Inicia o servidor
app.listen(PORT, () => {
  console.log('Servidor rodando na porta ${PORT}');
});




*/





/*
Verifique a Estrutura do Projeto

sap-service/
├── app.js                    # Arquivo principal do servidor
├── routes/                   # Pasta para o módulo de rotas
│   └── sapRoutes.js          # Arquivo que define as rotas
├── controllers/              # Pasta para o controlador
│   └── sapController.js
└── config/
    └── sapAxios.js



*/












/*
const express = require('express');
const sapCfAxios = require('sap-cf-axios').default;
const app = express();
const PORT = 8080;

app.use(express.json()); // Middleware para interpretar o JSON no body da requisição

const destinationName = 'S4HANA_API_CLFN_PRODUCT_SRV'; // Nome do destino no SAP Cloud Foundry
const axios = sapCfAxios(destinationName);

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
    // Recebe o sap-client do cabeçalho e o body da requisição POST
    const sapClient = req.headers['sap-client'];
    const body = req.body;

    if (!sapClient || !body) {
      return res.status(400).send('Header sap-client e body são obrigatórios');
    }

    // Busca o token CSRF usando o sap-client fornecido
    const { csrfToken, cookie } = await fetchCsrfToken(sapClient);

    // Faz a requisição POST com o token CSRF e os dados fornecidos
    const response = await axios.post('/sap/opu/odata/sap/z_gw_authorization_poc_srv/AuthorizationSet', body, {
      headers: {
        'x-csrf-token': csrfToken,
        'Cookie': cookie,
        'sap-client': sapClient,
        'Content-Type': 'application/json',
      }
    });

    // Envia a resposta do servidor para o cliente
    res.json(response.data);
    console.log('Requisição POST realizada com sucesso.');

  } catch (error) {
    console.error('Erro ao fazer a requisição POST:', error.message);
    res.status(500).send('Erro ao fazer a requisição POST');
  }
}

// Rota para acionar a requisição GET e POST
app.post("/serv", callPostWithCsrf);

// Inicia o servidor Express
app.listen(PORT, () => {
  console.log('Servidor rodando na porta', PORT);
});

*/





















/*const express = require('express');
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
}); */