
/**
 * Generic error handler.
 * @param {Error} error 
 * @param {Request} req 
 * @param {Result} res 
 * @param {Callback} next 
 */
const ErrorHandler = (error,req,res,next) => {
    if(!error.status) error.status = 500;
    res.status(error.status).send( {Message: 'Server Error. '+error } );
};

module.exports = {ErrorHandler};

