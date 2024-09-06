const mongoose = require('mongoose');

var lopSchema = new mongoose.Schema(
    {
        tenLop : {
            type: String,
            required: true,
            trim: true,
        },
        maKhoa: {
            type: mongoose.Types.ObjectId,
            ref: "Khoa",
        },
    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('Lop', lopSchema);
