const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

// const storage = multer.diskStorage({
//     destination: (req,file,cb) => cb(null,'uploads'),
//     filename: (req,file,cb) => cb(null, Date.now() + '_' + file.originalname )
// });

// const upload = multer({
//     storage
// });

const storage = multer.memoryStorage();
const upload = multer( {
    storage,
});

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const uploadS3 = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'dean-cloud-demo',
      acl: 'public-read',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      contentDisposition: "inline",
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, "cloud/" +Date.now().toString() + '-'+file.originalname);
      }
    })
});

module.exports = {upload,uploadS3};