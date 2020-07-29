const router = require('express').Router();

const routes = ['users', 'session', 'favorite-players', 'favorite-teams'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
