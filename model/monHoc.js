const mongoose = require('mongoose');

var monHocSchema = new mongoose.Schema(
    {
        tenMonHoc : {
            type: String,
            required: true,
            trim: true,
        },
        soTiet : {
            type: Number,
            required: true
        }
    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('MonHoc', monHocSchema);
