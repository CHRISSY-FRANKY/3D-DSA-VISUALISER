const express = require('express'); // import express.js
const router = express.Router(); // create router object
const paths = require('../config/paths'); // import the paths hub

router.get('/', (req, res) => // define GET route
{
    res.sendFile(paths.indexHTML); // send html file
});

module.exports = router; // export router object