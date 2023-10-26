module.exports = function (err, req, res, next) {
    const statusCode = 500;
    const errArr = [];

    switch(err.name) {
        case "SequelizeUniqueConstraintError":
        case 'SequelizeValidationError':
            statusCode = 400;
            err.errors.forEach(errData => {
                errArr.push(errData.message);
            });
            break;
        case 'JsonWebTokenError':
            statusCode = 400;
            errArr.push('Token Invalid!');
            break;
        default:
            const message = err.message || 'Internal ServerError';
            errArr.push(message);
            statusCode = err.status || statusCode;
            break;
    }

    res.status(statusCode).json(errArr.toString);
};