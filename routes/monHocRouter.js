const router = require('express').Router()
const ctrls = require('../controller/monHoc')
router.get('/getMonHocWithMoreThan50Tiet', ctrls.getMonHocWithMoreThan50Tiet)


module.exports = router