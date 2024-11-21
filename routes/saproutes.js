// routes/sapRoutes.js
const express = require('express');
const router = express.Router();
const sapController = require( '../controllers/sapcontroller');

<<<<<<< HEAD
/**
 * @swagger
 * /v1/serv:
 *   post:
 *     summary: Passando o usuário busca os dados organizacionais. Exemplo de endpoint que aceita um objeto JSON
 *     description: Dados ORG. Organização de Compras e Grupo de Compradores.
 *     tags:
 *       - ORG Data. Purchasing Organization and Buyer Group  
 *     parameters:
 *       - in: header
 *         name: sap-client
 *         required: true
 *         description: O cliente SAP a ser utilizado
 *         schema:
 *           type: string
 *           example: '110'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Uname:
 *                 type: string
 *                 example: ZEUS_02
 *               ObjectName:
 *                 type: string
 *                 example: ""
 *               StartPurchorg:
 *                 type: string
 *                 example: ""
 *               StartPurchgroup:
 *                 type: string
 *                 example: ""
 *               EndPurchorg:
 *                 type: string
 *                 example: ""
 *               EndPurchgroup:
 *                 type: string
 *                 example: ""
 *               Status:
 *                 type: boolean
 *                 example: false
 *               OrgLevel:
 *                 type: array
 *                 items:
 *                   type: string
 *               Objects:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     Uname:
 *                       type: string
 *                       example: ""
 *                     ObjectName:
 *                       type: string
 *                       example: ""
 *                     Activities:
 *                       type: array
 *                       items:
 *                         type: string
 *     responses:
 *       200:
 *         description: Resposta bem-sucedida
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
 *                           example: "https://vhudsds4ci.sap.unidasul.com.br:44300/sap/opu/odata/sap/z_gw_authorization_poc_srv/AuthorizationSet('ZEUS_02')"
 *                         uri:
 *                           type: string
 *                           example: "https://vhudsds4ci.sap.unidasul.com.br:44300/sap/opu/odata/sap/z_gw_authorization_poc_srv/AuthorizationSet('ZEUS_02')"
 *                         type:
 *                           type: string
 *                           example: "Z_GW_AUTHORIZATION_POC_SRV.Authorization"
 *                     ObjectName:
 *                       type: string
 *                       example: ""
 *                     Uname:
 *                       type: string
 *                       example: "ZEUS_02"
 *                     StartPurchorg:
 *                       type: string
 *                       example: ""
 *                     StartPurchgroup:
 *                       type: string
 *                       example: ""
 *                     Status:
 *                       type: boolean
 *                       example: true
 *                     EndPurchorg:
 *                       type: string
 *                       example: ""
 *                     EndPurchgroup:
 *                       type: string
 *                       example: ""
 *                     OrgLevel:
 *                       type: object
 *                       properties:
 *                         results:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               Ekorg:
 *                                 type: string
 *                                 example: "C003"
 *                               Ekgrp:
 *                                 type: string
 *                                 example: "103"
 *                               Uname:
 *                                 type: string
 *                                 example: "ZEUS_02"
 *                     Objects:
 *                       type: object
 *                       properties:
 *                         results:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               Uname:
 *                                 type: string
 *                                 example: "ZEUS_02"
 *                               ObjectName:
 *                                 type: string
 *                                 example: ""
 */


=======
>>>>>>> 91fec7b77888183294515c5eb830eee1adb3b231
// Define a rota POST para chamar a função do controlador
router.post('/', sapController.callPostWithCsrf);

module.exports = router;
<<<<<<< HEAD



=======
>>>>>>> 91fec7b77888183294515c5eb830eee1adb3b231
