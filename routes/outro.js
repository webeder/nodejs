// routes/sapRoutes.js
const express = require('express');
<<<<<<< HEAD
const router = express.Router();
const sapController = require( '../controllers/controleoutro');

 /**
 * @swagger
 * /v1/authorization:
 *   post:
 *     summary: Filtrando por dados organizacionais faz autorização de objetos. Exemplo de endpoint que aceita um objeto JSON
 *     description: Envia os dados do usuário para validação e retorna as autorizações configuradas.
 *     tags:
 *       - Authorization objects
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
 *                 example: C004
 *               StartPurchgroup:
 *                 type: string
 *                 example: 104
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
 *                           example: "https://ds4poc:1234/sap/opu/odata/sap/z_gw_authorization_poc_srv/AuthorizationSet('ZEUS')"
 *                         uri:
 *                           type: string
 *                           example: "https://ds4poc:1234/sap/opu/odata/sap/z_gw_authorization_poc_srv/AuthorizationSet('ZEUS')"
 *                         type:
 *                           type: string
 *                           example: "Z_GW_AUTHORIZATION_POC_SRV.Authorization"
 *                     ObjectName:
 *                       type: string
 *                       example: ""
 *                     Uname:
 *                       type: string
 *                       example: "ZEUS"
 *                     StartPurchorg:
 *                       type: string
 *                       example: "C004"
 *                     StartPurchgroup:
 *                       type: string
 *                       example: "104"
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
 *                               __metadata:
 *                                 type: object
 *                                 properties:
 *                                   id:
 *                                     type: string
 *                                     example: "https://ds4poc:1234/sap/opu/odata/sap/z_gw_authorization_poc_srv/OrganizationLevelSet('ZEUS')"
 *                                   uri:
 *                                     type: string
 *                                     example: "https://ds4poc:1234/sap/opu/odata/sap/z_gw_authorization_poc_srv/OrganizationLevelSet('ZEUS')"
 *                                   type:
 *                                     type: string
 *                                     example: "Z_GW_AUTHORIZATION_POC_SRV.OrganizationLevel"
 *                               Ekorg:
 *                                 type: string
 *                                 example: "C004"
 *                               Uname:
 *                                 type: string
 *                                 example: "ZEUS"
 *                               Ekgrp:
 *                                 type: string
 *                                 example: "104"
 *                     Objects:
 *                       type: object
 *                       properties:
 *                         results:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               __metadata:
 *                                 type: object
 *                                 properties:
 *                                   id:
 *                                     type: string
 *                                     example: "https://ds4poc:1234/sap/opu/odata/sap/z_gw_authorization_poc_srv/ObjectSet('ZEUS')"
 *                                   uri:
 *                                     type: string
 *                                     example: "https://ds4poc:1234/sap/opu/odata/sap/z_gw_authorization_poc_srv/ObjectSet('ZEUS')"
 *                                   type:
 *                                     type: string
 *                                     example: "Z_GW_AUTHORIZATION_POC_SRV.Object"
 *                               Uname:
 *                                 type: string
 *                                 example: "ZEUS"
 *                               ObjectName:
 *                                 type: string
 *                                 example: "ZEUS_NEGOC"
 *                               Activities:
 *                                 type: object
 *                                 properties:
 *                                   results:
 *                                     type: array
 *                                     items:
 *                                       type: object
 *                                       properties:
 *                                         __metadata:
 *                                           type: object
 *                                           properties:
 *                                             id:
 *                                               type: string
 *                                               example: "https://ds4poc:1234/sap/opu/odata/sap/z_gw_authorization_poc_srv/ActivitiesSet('ZEUS_NEGOC')"
 *                                             uri:
 *                                               type: string
 *                                               example: "https://ds4poc:1234/sap/opu/odata/sap/z_gw_authorization_poc_srv/ActivitiesSet('ZEUS_NEGOC')"
 *                                             type:
 *                                               type: string
 *                                               example: "Z_GW_AUTHORIZATION_POC_SRV.Activities"
 *                                         ObjectName:
 *                                           type: string
 *                                           example: "ZEUS_NEGOC"
 *                                         Activity:
 *                                           type: string
 *                                           example: "03"
 *                                         Description:
 *                                           type: string
 *                                           example: "Exibir"
 *     x-codeSamples:
 *       - lang: curl
 *         label: cURL Example
 *         source: |
 *           curl -X 'POST' \
 *             'https://mynodejs--random-route-lean-badger-to.cfapps.br10.hana.ondemand.com/v1/authorization' \
 *             -H 'Authorization: Bearer <token>' \
 *             -H 'sap-client: 110' \
 *             -H 'Content-Type: application/json' \
 *             -d '{"Uname": "ZEUS", "ObjectName": "", "StartPurchorg": "C004", "StartPurchgroup": "104", "EndPurchorg": "", "EndPurchgroup": "", "Status": false, "OrgLevel": [], "Objects": []}'    
 */

router.post('/', sapController.callPostOutro);

module.exports = router;
=======
const router2 = express.Router();
const sapController = require( '../controllers/controleoutro');

// Define a rota POST para chamar a função do controlador
router2.post('/', sapController.callPostOutro);

module.exports = router2;
>>>>>>> 91fec7b77888183294515c5eb830eee1adb3b231
