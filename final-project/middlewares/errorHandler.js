const errorHandler = (err, req, res, next) => {
    console.log(err)
      let code;
      let message;
      if (err.name == 'SequelizeValidationError') {
          const errors = err.errors.map((el) => {
            return el.message;
          })
          code = 400
          message = errors
      } else if (err.name == 'InvalidParams') {
        code = 400
        message = 'Invalid params input'
      } else if (err.name == 'Forbidden') {
        code = 403
        message = 'Forbidden to access'
      } else if (err.name == 'JsonWebTokenError') {
        code = 401
        message = 'Invalid token'
      } else if (err.name == 'SequelizeUniqueConstraintError') {
        code = 400
        message = 'Email must be unique'
      } else if (err.name == 'NotFound') {
          code = 404
          message = 'Not Found'
      } else if (err.name == 'Unauthorized') {
        code = 401
        message = 'Email/password invalid'
      } else if (err.name == 'BadRequestImgSize') {
        code = 400
        message = 'File Size too Large'
      } else if (err.name == 'BadRequestFileType') {
        code = 400
        message = 'File Type must be JPEG/PNG/JPG'
      } 
      else {
        code = 500
        message = 'Internal server error'
      }
  
      res.status(code).json({ message });
    };
  
    module.exports = errorHandler