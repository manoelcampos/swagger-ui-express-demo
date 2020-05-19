/**
 * Configura todas as rotas.
 */

const router = require('express').Router();
const customers = require('./customers');

router.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
router.use('/customers', customers);

module.exports = router;