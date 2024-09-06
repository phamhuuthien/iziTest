const mongoose = require('mongoose');

var khoaSchema = new mongoose.Schema(
    {
        maLop : {
            type: String,
            required: true,
            trim: true,
        },
        tenKhoa : {
            type: Boolean,
            required: true,
            trim: true,
        },
        SoCBGD : {
            type: Number,
            required: true
        }
    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('Khoa', khoaSchema);
