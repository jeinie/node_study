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
        db.Comment.belongsTo(db.User, { foreignKey: 'commenter', tagetKey: 'id' });
    }
}

// 다대다 관계
// db.Post.belongsToMany(db.HashTag, { through: 'PostHashtag' })
// db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' })
