// controllers/sapController.js
const axios = require('../config/sapaxios');


// Função para buscar os dados no SAP
async function getProductCharcValue(req, res) {
  const path = `/sap/opu/odata/sap/API_CLFN_PRODUCT_SRV/A_ProductCharcValue(Product='000000000001021347',ClassType='026',CharcInternalID='883',CharcValuePositionNumber='1')`;

  try {
    const response = await axios.get(path, {
      headers: {
        'sap-client': '110', // Cliente SAP
      },
    });

    // Retorna o JSON com os dados do SAP
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar dados do SAP:', error.message);
    res.status(500).json({
      error: 'Erro ao buscar dados do SAP',
      details: error.message,
    });
  }
}

module.exports = {
  getProductCharcValue,
};
