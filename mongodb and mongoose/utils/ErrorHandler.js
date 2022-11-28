class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'error' : 500
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler