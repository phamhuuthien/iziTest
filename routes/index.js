const sinhvienRouters = require('./sinhVienRouter')
const KhoaRouters = require('./khoaRouter')
const MonHocRouters = require('./monHocRouter')



const initRouters = (app)=>{
    app.use("/v1/bai-taps/sinhvien", sinhvienRouters);
    app.use("/v1/bai-taps/khoa", KhoaRouters);
    app.use("/v1/bai-taps/monhoc", MonHocRouters);
}


module.exports = initRouters