<<<<<<< HEAD
 const express = require('express');
const router = express.Router();

// Define a rota principal
//usando ? após o nome do parâmetro torna o parâmetro opcional. Isso significa que o parâmetro name não precisa ser fornecido na URL.
router.get('/:name?', (req, res) => {
  const protocol = req.protocol;
  const host = req.get('host');
  const fullUrl = `${protocol}://${host}`;
 // const nome = req.get('nome');
const name = req.params.name || 'Visitante' // caso o nome seja vazio vem como default o visitante.
=======
const express = require('express');
const router = express.Router();

// Define a rota principal
router.get('/', (req, res) => {
  const protocol = req.protocol;
  const host = req.get('host');
  const fullUrl = `${protocol}://${host}`;
>>>>>>> 91fec7b77888183294515c5eb830eee1adb3b231

  // Renderiza o template EJS com variáveis dinâmicas
  res.render('index', {
    greeting: 'Bem-vindo ao serviço middleware',
    url: fullUrl,
<<<<<<< HEAD
    port: process.env.PORT || 8081,
    nome: name
  });
});

module.exports = router;  

/*SÓ DESCOMENTAR SE FOR USAR PAGINA WEB HTML ETC... */
=======
    port: process.env.PORT || 8080
  });
});

module.exports = router;
>>>>>>> 91fec7b77888183294515c5eb830eee1adb3b231
