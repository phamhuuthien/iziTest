const router = require('express').Router()
const ctrls = require('../controller/khoa')
router.get("/:id",ctrls.getKhoa)
router.get('/tonglopsinhvienkinhte', ctrls.tongSoLopKhoaKinhTe)


module.exports = router