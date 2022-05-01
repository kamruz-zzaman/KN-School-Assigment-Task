const express   = require('express');
const router    = express.Router();

const controllers = require('../../controllers').assessment;

router.get('/all',controllers.getAssessment)
router.post('/post',controllers.postAssessment)
router.put('/update',controllers.updateAssessment)
router.delete('/delete',controllers.deleteAssessment)

module.exports = router;