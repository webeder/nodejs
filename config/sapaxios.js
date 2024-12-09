// config/sapAxios.js
const sapCfAxios = require('sap-cf-axios').default;
const destinationName = '*****_API_CLFN_PRODUCT_SRV'; // Nome do destino SAP Cloud Foundry

// Exporta a instância do axios configurada
module.exports = sapCfAxios(destinationName);
