const router = require('express').Router()
const ctrls = require('../controller/sinhVien')

router.get('/cau-1', ctrls.getSinhVien)
router.get('/totalSinhvien/:maLop', ctrls.demSinhVienVoiMaLop)
router.get('/danhSachSinhVienKhoaCongNgheThongTin',ctrls.danhSachSinhVienKhoaCongNgheThongTin)
router.get('/getDiemTrietSinhVien',ctrls.getDiemTrietSinhVien)
router.get('/getDiemTrungBinh:/maSinhVien',ctrls.getDiemTrungBinh)


module.exports = router