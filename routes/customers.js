/**
 * Rotas de customers.
 * Os endereços definidos para o objeto Router
 * são relativos a /customers,
 * assim, não temos (e nem deve-se) repetir
 * tal endereço. Se for preciso mudar,
 * isso é feito de forma centralizada no index.js
 */

const customers = require('express').Router();

const customersData = [
  { id: 0, name: "Manoel" },
  { id: 1, name: "João" },
  { id: 2, name: "Maria" },
];

/**
 * @swagger
 * /customers:
 *  get: 
 *    description: Obtém a lista de clientes
 *    responses:
 *      '200': 
 *        description: Clientes obtidos com sucesso 
 */
customers.get('/', (req, res) => res.json(customersData));

/**
 * @swagger
 * /customers/{id}:
 *  get: 
 *    parameters:
 *      - name: id
 *        in: path
 *        description: id do cliente
 *        required: true
 *        type: integer
 *    description: Obtém um cliente pelo id
 *    responses:
 *      '200': 
 *        description: Cliente obtido com sucesso 
 */
customers.get('/:id', (req, res) => res.json(customersData[req.params.id]));

module.exports = customers;