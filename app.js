const express = require('express');
const xsenv = require('@sap/xsenv');
const SapCfAxios = require('sap-cf-axios');



//
// Carrega o default-env.json
//xsenv.loadEnv();



 

// Acessa as destinations configuradas no default-env.json
 const services = xsenv.getServices({ destinations: { tag: 'destination' } });
const destinationConfig = services.destinations.find(dest => dest.name === "S4HANA_API_CLFN_PRODUCT_SRV");

if (!destinationConfig) {
  console.error("Destination não encontrada no default-env.json");
  process.exit(1); // Encerra o processo se a destination não foi encontrada
}

// Configura o sap-cf-axios para usar a destination
const cpi = SapCfAxios(destinationConfig.name, {
  baseURL: destinationConfig.url,
  auth: {
    username: destinationConfig.username,
    password: destinationConfig.password
  }
});

// Inicializa o Express
const app = express();
const PORT = process.env.PORT || 3000;

// Define um endpoint GET para chamar a destination
app.get('/call-destination', async (req, res) => {
  try {
    const response = await cpi.get("sap/opu/odata/sap/z_gw_authorization_poc_srv/AuthorizationSet/"); // Substitua pelo endpoint correto
    res.json(response.data);
  } catch (error) {
    console.error("Erro ao chamar a destination:", error.message);
    res.status(500).send("Erro ao chamar a destination");
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
