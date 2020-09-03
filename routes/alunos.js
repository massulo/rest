const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando GET dentro da rota de alunos'
    });
});

router.post('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'Usando POST dentro da rota de alunos'
    });
});

module.exports = router;