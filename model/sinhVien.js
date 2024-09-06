const mongoose = require('mongoose');

var sinhVienSchema = new mongoose.Schema(
    {
        hoVaTen : {
            type: String,
            required: true,
            trim: true,
        },
        gioiTinh : {
            type: Boolean,
            required: true
        },
        ngaySinh : {
            type: Date,
            required: true
        },
        maLop: {
            type: mongoose.Types.ObjectId,
            ref: "Lop",
        },
        tinh : {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('SinhVien', sinhVienSchema);
