const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const winston = require('winston');
const PORT = process.env.APP_PORT || 3090;
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger.json');

const todoRouter = require('./routes/todoRoutes');

dotenv.config();

const app = express();

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [new winston.transports.Console()], 
});

// Middleware untuk logging
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.originalUrl}`);
    next();
});
app.use(express.json());
app.use(morgan('dev'));
app.use(todoRouter);

// For unit testing purpose
if(process.env.NODE_ENV !="test"){
    app.listen(PORT, () => {
        console.info(`Application running at localhost: ${PORT}`);
    });
}


module.exports = app;