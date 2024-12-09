// busca token 
//const axios2 = SapCfAxios("*****_API_CLFN_PRODUCT_SRV");
//const handleMaterialsRequest = async(req,res)=>{
//    const response = await axios2({
//        method:"GET",
//        url: "/sap/opu/odata/sap/API_CLFN_PRODUCT_SRV/A_ProductCharcValue",
//        params: {
//            $format:"json",
//            $top:"1",
//            "sap-client":"110"
//        },
//        headers:{
//            accept: "application/json"
//            
//        }

 //   });
 //   res.send(response.data.d.results);

//}
/*
const axios1 = SapCfAxios("S4HANA_API_CLFN_PRODUCT_SRV");

const handleProductsRequest = async(req,res)=>{
    const response = await axios1({
        method:"GET",
        url: "dummy",
        params: {
            $format:"json",
            $top:"1"

        },
        headers:{
            accept: "application/json"
        }

    });
    res.send(response.data.d.results);

} */


    /*codigo novo com get já junto 
    
    
    
app.use(express.json());

// Instância do cliente SAP CF Axios
const axiosInstance = SapCfAxios("S4HANA_API_Z_GW_AUTHORIZATION_POC_SRV");

// Função para obter o token CSRF
const getCsrfToken = async () => {
    const response = await axiosInstance({
        method: "GET",
        url: "/sap/opu/odata/sap/z_gw_authorization_poc_srv/AuthorizationSet",
        headers: {
            "x-csrf-token": "Fetch" // Define para buscar um novo token
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
            url: "/sap/opu/odata/sap/z_gw_authorization_poc_srv/AuthorizationSet",
            headers: {
                accept: "application/json",
                "x-csrf-token": csrfToken, // Usando o novo token CSRF
                "sap-client": sapClient
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
    
    
    
    
    
    
    
    
    
    */
