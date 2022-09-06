const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            comment: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW,
            },
        }, {
            sequelize,
            timestamps: 'Comment',
            modelName: 'comments',
            paranoid: false,
            charset: 'utf8mb4', // mb4 붙이면 이모티콘까지 가능
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        // 댓글은 사용자에게 속해 있으니까
        db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });
    }
}

// 다대다 관계
// ex) 게시글과 해시태그 테이블
// 하나의 게시글이 여러 개의 해시태그를 가질 수 있고 하나의 해시태그가 여러 개의 게시글을 가질 수 있음
// DB 특성상 다대다 관계는 중간 테이블이 생김
// db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
// db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });