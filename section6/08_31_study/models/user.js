// 시퀄라이즈 모델 만들기
const Sequelize = require('sequelize');

// class (모델이름)
module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({ // 첫번째 인수는 컬럼 정의 / 두번째 인수는 모델
            // 시퀄라이즈는 id를 자동으로 넣어주므로 생략 가능
            /*id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },*/
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            married: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            comment: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            create_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User', // 자바스크립트에서 쓰는 이름
            tableName: 'users', // sql에서 쓰는 이름
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    // user의 외래키(남), 내 id를 commenter라는 남의 키가 참조하고 있다.
    static associate(db) {
        db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
    }
}

// users 모델과 comments 모델 간의 관계 정의
// 1:N 관계 (사용자 한 명이 댓글 여러개 작성)
// 시퀄라이즈에서는 1:N 관계를 hasMany로 표현 (사용자.hasMany(댓글))
// 반대 입장에서는 belongsTo(댓글.belongsTo(사용자))
// belongsTo가 있는 테이블에 컬럼이 생김 (댓글 테이블에 commenter 컬럼)