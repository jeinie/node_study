const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const { sequelize } = require('./models');
const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');

sequelize.sync({ force: false })
    .then((() => {
        console.log('데이터베이스 연결 성공');
    }))
    .catch((err) => {
        console.error(err);
    });

    app.use(morgan('dev'));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use((req, res, next) => {
        const error = new Error(`${req.method} ${req.url} 라우터가 없습니다`);
        error.status = 404;
        next(error);
    });