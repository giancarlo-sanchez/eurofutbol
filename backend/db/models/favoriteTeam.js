'use strict';
module.exports = (sequelize, DataTypes) => {
  const FavoriteTeam = sequelize.define('FavoriteTeam', {
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      }
    },
    teamId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      }
    },
    teamName: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [1, 255],
      },
    },
    teamImageUrl: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        isUrl: true,
        len: [10, 255],
      }
    },

  }, {});
  FavoriteTeam.associate = function(models) {
    // associations can be defined here
    FavoriteTeam.belongsTo(models.User, {foreignKey: "userId"});
  };
  return FavoriteTeam;
};
