'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavoritePlayer = sequelize.define('FavoritePlayer', {
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      }
    },
    playerId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      }
    },
    playerName: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [1, 255],
      },
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        isUrl: true,
        len: [10, 255],
      }
    },
    teamName: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [1, 255],
      },
    },
  }, {});
  FavoritePlayer.associate = function(models) {
    FavoritePlayer.belongsTo(models.User, {foreignKey: "userId"});
  };
  return FavoritePlayer;
};
