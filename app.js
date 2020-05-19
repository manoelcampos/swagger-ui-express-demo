const express = require('express');
const app = express();
app.use(express.static("public"));

const routes = require('./routes');
app.use('/', routes);

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const porta = process.env.PORT || 8080;

const swaggerOptions = {
  swaggerDefinition: require('./swagger.js'),

  apis: ["./routes/*.js"]
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerOptions)));

app.listen(porta, () => {
  console.log('Servidor iniciado. Abra o navegador em http://localhost:' + porta);
});
