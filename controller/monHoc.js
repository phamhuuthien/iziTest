const MonHoc = require('../model/monHoc');
const KetQua = require('../model/ketQua');

const getMonHocWithMoreThan50Tiet = async (req, res) => {
    const response = await MonHoc.find({ soTiet: { $gt: 50 } }) 
        .select('tenMonHoc soTiet'); 
    return res.json({
        success : response ? true : false,
        rs : response ? response : 'something went wrong'
    })
};

const getHighAndLowScore = async (req,res)=>{
    const monHoc = await MonHoc.find({tenMonHoc : "Triet"})
    const highScoreStudent = await KetQua.findOne({ maMonHoc: monHoc._id })
      .sort({ diemThi: -1 }) 
      .exec();
    const lowScoreStudent = await KetQua.findOne({ maMonHoc: monHoc._id })
        .sort({ diemThi: 1 }) 
        .exec();
    return res.json({
        highScoreStudent,
        lowScoreStudent
    })
}
module.exports = {
  getMonHocWithMoreThan50Tiet,
  getHighAndLowScore
};
