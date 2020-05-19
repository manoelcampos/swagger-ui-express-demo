/**
 * Configurações para habilitar Swagger no projeto.
 */
const swaggerDefinition = {
  info: {
    title: "API REST de exemplo de uso do Swagger em Node.js",
    description: "Mostra como configurar uma aplicação Node.js com expressjs, swagger-ui-express para geração da Swagger UI e swagger-jsdoc para especificar os endpoints implementados com expressjs por meio de comentários JSDoc."
  },
  servers: ["http://localhost:8080"]
}

module.exports = swaggerDefinition