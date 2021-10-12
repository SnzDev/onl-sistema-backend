const express = require('express');
const routes = express.Router();

routes.get('/', async (req, res) => {
    res.json('API ONL');
});




module.exports = routes;