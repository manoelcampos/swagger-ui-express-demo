const express = require('express');
const app = express();
app.use(express.static("public"));

const routes = require('./routes');
app.use('/', routes);

const porta = process.env.PORT || 8080;

require('./swagger-setup')(app);

app.listen(porta, () => {
  console.log('Servidor iniciado. Abra o navegador em http://localhost:' + porta);
});
