# Projeto Node.js com SAP SDK (`SapCfAxios`)

Este projeto utiliza Node.js e o SDK `SapCfAxios` para se comunicar com um destino SAP no SAP Cloud Foundry. Ele inclui uma rota para obter o token de autenticação através do método `fetch` e realizar requisições GET e POST para endpoints específicos.

## Pré-requisitos

- Node.js instalado.
- Conta no SAP Cloud Foundry configurada.
- Destino configurado no SAP Cloud Foundry para comunicação com o SAP.

## Configuração do Projeto

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_DIRETORIO>

## Instale as dependências:

```bash
npm install
## 3. POST /teste
Este é um endpoint de teste que realiza uma operação POST para validar a comunicação com o destino SAP.

## Exemplo de código:
// Rota para o teste POST
app.post("/teste", testePOST);

## GET /materials
- Este endpoint realiza uma requisição GET para recuperar informações de materiais do SAP, usando o token de autorização obtido no endpoint /authorization.

Exemplo de código:
app.get("/materials", handleMaterialsRequest);
