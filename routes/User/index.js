const express   = require('express');
const router    = express.Router();
const controllers = require('../../controllers').user;

router.get('/test',controllers.test)
module.exports = router;