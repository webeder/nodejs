const express = require("express");
const SapCfAxios = require("sap-cf-axios").default;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Instância do cliente SAP CF Axios
const axiosInstance = SapCfAxios("*****_API_CLFN_PRODUCT_SRV");

// Função para obter o token CSRF
const getCsrfToken = async () => {
    const response = await axiosInstance({
        method: "GET",
        url: "sap/opu/odata/sap/z_gw_authorization_poc_srv",
        headers: {
            "x-csrf-token": "fetch", // Define para buscar um novo token
               "sap-client":"110"
        }
    });
    return response.headers["x-csrf-token"]; // Retorna o token obtido
};

// Função para lidar com a requisição POST
const handleAuthorizationRequest = async (req, res) => {
    try {
        const csrfToken = await getCsrfToken(); // Obtém um novo token CSRF
        const sapClient = req.headers["sap-client"];
        const requestData = req.body;

        if (!sapClient) {
            return res.status(400).send({ error: "Header sap-client is required" });
        }

        // Faz a chamada POST ao SAP usando o SAP CF Axios
        const response = await axiosInstance({
            method: "POST",
            url: "sap/opu/odata/sap/z_gw_authorization_poc_srv/AuthorizationSet",
            headers: {
                accept: "application/json",
                "x-csrf-token": csrfToken, // Usando o novo token CSRF
                "sap-client": "110"
            },
            data: requestData
        });

        res.status(response.status).send(response.data);
    } catch (error) {
        console.error("Erro na requisição para o SAP:", error.message);
        res.status(error.response ? error.response.status : 500).send({
            error: "Falha na chamada ao SAP BTP",
            details: error.message
        });
    }
};

// Endpoint POST para /authorization
app.post("/authorization", handleAuthorizationRequest);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta ${PORT}`);
});



