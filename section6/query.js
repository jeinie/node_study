// SELECT name, age FROM nodejs.users WHERE married = 1 AND age > 30;
const { Op } = require('sequelize');
const { User } = require('./08_31_study/models');
User.findAll({
    attributes: ['name', 'age'],
    where: {
        married: 1,
        age: { [Op.gt]: 30}, // 30 초과
    }
})

// SELECT id, name FROM users WHERE married = 0 OR age > 30;
const { Op } = require('sequelize');
const { User } = require('./08_31_study/models');
User.findAll({
    attributes: ['id', 'name'],
    where: {
        [Op.or]: [{ married:0 }, {age: { [Op.gt]: 30 } }], // OR 인 경우 배열롬 묶어줘야 함
    },
});

// 수정
// UPDATE nodjs.users SET comment = '바꿀 내용' WHERE id = 2;
User.update({
    comment: '바꿀 내용',
}, {
    where: { id: 2 },
});

// 삭제
// DELETE FROM nodejs.users WHERE id = 2;
User.destroy({
    where: { id: 2},
});