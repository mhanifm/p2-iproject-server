const multer  = require('multer')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

let uploadImg = upload.single('imageUrl')

module.exports = uploadImg