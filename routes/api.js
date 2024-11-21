/**
 * @swagger
 * /api/teste:
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
 *                     Product:
 *                       type: string
 *                       example: "000000000001021347"
 *                     ClassType:
 *                       type: string
 *                       example: "026"
 *                     CharcInternalID:
 *                       type: string
 *                       example: "883"
 */
