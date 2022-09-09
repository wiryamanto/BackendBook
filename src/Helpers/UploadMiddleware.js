const multer = require('multer')
const path = require('path');
const { up } = require('../database/migrations/20210806063439-update');

const stroge = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./public/image");
    },
    filename:(req,file,callback)=>{
        const nameFormat = `${Date.now()}-${file.fieldname}${path.extname(
            file.originalname
        )}`;
        callback(null, nameFormat);
    }
});

const upload = multer({
    storage: Storage,
    limits: 2 * 1000 * 1000,
});


module.exports = singleUpload;