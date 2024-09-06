const SinhVien = require("../model/sinhVien")
const Khoa = require("../model/khoa")
const MonHoc = require("../model/monHoc")

const getSinhVien = async(req,res)=>{
    const response = await SinhVien.find().populate("maLop","tenLop").select('-gioiTinh -ngaySinh -tinh')
    return res.json({
        success : response ? true : false,
        rs : response ? response : 'something went wrong'
    })
}
const demSinhVienVoiMaLop = async (req,res) => {
    const { maLop } = req.params;
    const response = await SinhVien.countDocuments({ maLop });
    return res.json({
        success : response ? true : false,
        rs : response ? response : 'something went wrong'
    })
}


const danhSachSinhVienKhoaCongNgheThongTin = async(req,res)=>{
    const khoa = await Khoa.findOne({ tenKhoa: 'Cong Nghe Thong Tin' });
    const students = await SinhVien.find()
    .populate({
      path: 'maLop',
      match: { maKhoa: khoa._id }, 
      select: 'maLop' 
    })
    .exec();
    const response = students.filter(student => student.maLop);
    return res.json({
        success : response ? true : false,
        rs : response ? response : 'something went wrong'
    })
}

const getDiemTrietSinhVien = async (req, res) => {
    const monHoc = await MonHoc.findOne({ tenMonHoc: 'triet hoc' });
    const results = await KetQua.find({ maMonHoc: monHoc._id, diemThi: { $gte: 7 } })
    const response = results.map(result => ({
        maSinhVien: result.maSinhVien.maSinhVien,
        hoTen: result.maSinhVien.hoTen,
        diemThi: result.diemThi
    }));
    return res.json({
        success : response ? true : false,
        rs : response ? response : 'something went wrong'
    })
}

const getDiemTrungBinh = async (req, res) => {
    const { maSinhVien } = req.params; 
    const results = await KetQua.find({ maSinhVien }).exec();
    const totalScore = results.reduce((acc, result) => acc + result.diemThi, 0);
    const averageScore = totalScore / results.length;
    return res.json({
        success : averageScore ? true : false,
        rs : averageScore ? averageScore : 'something went wrong'
    })
}


module.exports ={getSinhVien,demSinhVienVoiMaLop,danhSachSinhVienKhoaCongNgheThongTin,getDiemTrietSinhVien,getDiemTrungBinh}