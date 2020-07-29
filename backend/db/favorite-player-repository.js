const { FavoritePlayer } = require('./models');

async function create(details, user) {
  details.userId = user.id;
  const favoritePlayer = await FavoritePlayer.create(details);
  return favoritePlayer.id;
}

async function list(userId) {
  return await FavoritePlayer.findAll({where: { userId },
    attributes: [ 'playerName', 'imageUrl', 'teamName', 'playerId', 'updatedAt', 'id' ],
  });
}


module.exports = {
  create,
  list,
  one,
};
