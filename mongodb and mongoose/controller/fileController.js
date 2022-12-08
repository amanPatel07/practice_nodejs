const multer = require('multer');
const ErrorHandler = require('./../utils/ErrorHandler');

/**
 * Folder path and file name of the uploaded file for saving the file. 
 */
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'dev-data/carImage');
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        cb(null, `user-${req.user._id}-${Date.now()}.${ext}`);
    }
});

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true)
    } else {
        cb(new ErrorHandler('Not a image! Upload only image', 400), false)
    }
}

exports.upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});
