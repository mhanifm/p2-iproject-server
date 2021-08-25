const axios = require('axios')
const FormData = require('form-data')
const { Flight } = require('../models')

async function imgKit(req, res, next) {
    console.log(req.file,"reqfile")
    try {
        if(!req.file){
            const foundFlight = await Flight.findByPk(+req.params.id)
            if (foundFlight){
                req.body.imgUrl = foundFlight.imgUrl
                console.log('di line 12============')
                next()
            } else {
                throw({ name: 'NotFound' })
            }
        } else {
            if (req.file.mimetype !== 'image/jpeg' && req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpg'){
                throw ({name: 'BadRequestFileType'})
            } else {
                
                const form = new FormData()
                form.append("file", req.file.buffer.toString("base64"))
                form.append("fileName", req.file.originalname)
                const encodedAPIKey = Buffer.from(`${process.env.PRIVATE_KEY}:`).toString("base64")
                // console.log(encodedAPIKey);
                const upload = await axios.post(
                    "https://upload.imagekit.io/api/v1/files/upload",
                    form,
                    {
                        headers: {
                            "Authorization" : `Basic ${encodedAPIKey}`,
                            ...form.getHeaders()
                        }
                    }
                )
                req.body.imageUrl = upload.data.url
                next()
            }
        }
    } 
    catch(err) {
        console.log(err);
        next(err)
    }
}

module.exports = imgKit