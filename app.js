const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const winston = require('winston');
const PORT = process.env.APP_PORT || 3090;
const cors = require('cors');
const todoRouter = require('./routes/todoRoutes');
const errorHandler = require('./middleware/error-handler');

dotenv.config();

const app = express();

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [new winston.transports.Console()], 
});

// Middleware untuk logging
app.use(cors());
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.originalUrl}`);
    next();
});
app.use(express.json());
app.use(morgan('dev'));
app.use(todoRouter);
app.use(errorHandler);

// For unit testing purpose
if(process.env.NODE_ENV !="test"){
    app.listen(PORT, () => {
        console.info(`Application running at localhost: ${PORT}`);
    });
}


module.exports = app;