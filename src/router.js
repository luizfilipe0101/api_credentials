const express = require('express');
const router = express.Router();

const {GetAll, QR} = require('./controllers/tasks_get');
const {Presence, Novo_participante} = require('./controllers/tasks_post');

router.get('/', GetAll);
router.get('/qr', QR);
router.post('/check', Presence);
router.post('/new', Novo_participante);


module.exports = router;
