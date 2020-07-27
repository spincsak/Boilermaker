const router = require('express').Router();

//router.use statements go here!
router.use('/users', require('./users'));

router.use((req, res, next) => {
  const error = new Error('Sorry, route not found');
  error.status = 404;
  next(error);
});

module.exports = router;
