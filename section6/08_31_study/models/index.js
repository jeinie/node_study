const { Sequelize } = require('sequelize');
// user.js, comment.js 만든 후에
const User = require('./user');
const Comment = require('./comment');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

// user.js 만든 후에
db.User = User;
db.Comment = Comment;

User.init(sequelize); // sequelize 넣어준다. 얘는 연결 객체 (model 이랑 Myql 연결)
Comment.init(sequelize);



module.exports = db;