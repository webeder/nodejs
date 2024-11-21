
const express = require('express');
const { getProductCharcValue } = require('../controllers/productCharcController');

const router = express.Router();
/**
 * @swagger
 * /api/product-charc-value:
 *   get:
 *     summary: Realiza uma chamada GET simples sem autenticação usando um destination SAP.
 *     description: Este endpoint retorna os valores de características de um produto específico usando o serviço SAP configurado via destination.
 *     tags:
 *       - Product Characteristics
 *     responses:
 *       200:
 *         description: Resposta bem-sucedida com os dados da característica do produto.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 d:
 *                   type: object
 *                   properties:
 *                     __metadata:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: "https://ds4poc:1234/sap/opu/odata/sap/API_CLFN_PRODUCT_SRV/A_ProductCharcValue(Product='000000000001021347',ClassType='026',CharcInternalID='883',CharcValuePositionNumber='1')"
 *                         uri:
 *                           type: string
 *                           example: "https://ds4poc:1234/sap/opu/odata/sap/API_CLFN_PRODUCT_SRV/A_ProductCharcValue(Product='000000000001021347',ClassType='026',CharcInternalID='883',CharcValuePositionNumber='1')"
 *                         type:
 *                           type: string
 *                           example: "API_CLFN_PRODUCT_SRV.A_ProductCharcValueType"
 *                     Product:
 *                       type: string
 *                       example: "000000000001021347"
 *                     ClassType:
 *                       type: string
 *                       example: "026"
 *                     CharcInternalID:
 *                       type: string
 *                       example: "883"
 *                     CharcValuePositionNumber:
 *                       type: string
 *                       example: "1"
 *                     KeyDate:
 *                       type: string
 *                       example: "/Date(1732147200000)/"
 *                     ChangeNumber:
 *                       type: string
 *                       example: ""
 *                     CharcValueDependency:
 *                       type: string
 *                       example: "1"
 *                     CharcValue:
 *                       type: string
 *                       example: "0"
 *                     CharcFromNumericValue:
 *                       type: string
 *                       example: "0"
 *                     CharcFromNumericValueUnit:
 *                       type: string
 *                       example: ""
 *                     CharcToNumericValue:
 *                       type: string
 *                       example: "0"
 *                     CharcToNumericValueUnit:
 *                       type: string
 *                       example: ""
 *                     CharcFromDecimalValue:
 *                       type: string
 *                       example: "0.00000000000000"
 *                     CharcToDecimalValue:
 *                       type: string
 *                       example: "0.00000000000000"
 *                     CharcFromAmount:
 *                       type: string
 *                       example: "0.00"
 *                     CharcToAmount:
 *                       type: string
 *                       example: "0.00"
 *                     Currency:
 *                       type: string
 *                       example: ""
 *                     CharcFromDate:
 *                       type: string
 *                       example: null
 *                     CharcToDate:
 *                       type: string
 *                       example: null
 *                     CharcFromTime:
 *                       type: string
 *                       example: "PT00H00M00S"
 *                     CharcToTime:
 *                       type: string
 *                       example: "PT00H00M00S"
 *                     CharacteristicAuthor:
 *                       type: string
 *                       example: "8"
 *                     CharcMaintAuthGrp:
 *                       type: string
 *                       example: ""
 */
 
router.get('/product-charc-value', getProductCharcValue);

module.exports = router;
