const express = require('express');
const router = express.Router();

// Define a rota principal
router.get('/', (req, res) => {
  const protocol = req.protocol;
  const host = req.get('host');
  const fullUrl = `${protocol}://${host}`;

  // Renderiza o template EJS com variáveis dinâmicas
  res.render('index', {
    greeting: 'Bem-vindo ao serviço middleware',
    url: fullUrl,
    port: process.env.PORT || 8080
  });
});

module.exports = router;
