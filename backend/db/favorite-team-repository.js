const { FavoriteTeam } = require('./models');

async function create(details, user) {
  details.userId = user.id;
  const favoriteTeam = await FavoriteTeam.create(details);
  return favoriteTeam.id;
}

async function list(userId) {
  return await FavoriteTeam.findAll({where: { userId },
    attributes: [ 'teamName', 'teamImageUrl', 'teamId', 'userId', 'updatedAt', 'id' ],
  });
}

async function one(id) {
  const favoriteTeam = await FavoriteTeam.findByPk(id, {
    include: [ 'user' ]
  });

  return {
    userId: favoriteTeam.userId,
    teamId: favoriteTeam.playerId,
    id: favoriteTeam.id,
    teamImageUrl: favoriteTeam.imageUrl,
    teamName: favoriteTeam.name,
  };
}

module.exports = {
  create,
  list,
  one,
};
