const mongoose = require('mongoose');

var ketQuaSchema = new mongoose.Schema(
    {
        maSinhVien: {
            type: mongoose.Types.ObjectId,
            ref: "SinhVien",
        },
        maMonHoc: {
            type: mongoose.Types.ObjectId,
            ref: "MonHoc",
        },
        diemThi : {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('KetQua', ketQuaSchema);
