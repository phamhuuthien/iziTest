const Khoa = require("../model/khoa");
const Lop = require("../model/lop");
const tongSoLopKhoaKinhTe = async(req, res) => {
    const khoa = await Khoa.findOne({ tenKhoa: 'Kinh Te' });
    const response = await Lop.countDocuments({ maKhoa : khoa._id })
    return res.json({
        success : response ? true : false,
        rs : response ? response : 'something went wrong'
    })
}
const getKhoa = async(req, res) => {
    const {id} = req.params
    const response = await Khoa.findOne({_id : id})
    return res.json({
        success : response ? true : false,
        rs : response ? response : 'something went wrong'
    })
}
module.exports = {
    tongSoLopKhoaKinhTe,
    getKhoa
}