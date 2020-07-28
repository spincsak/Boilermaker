const router = require('express').Router();
const User = require('../db/models/user');

router.put('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        res.status(401).send('User not found!');
      } else if (!user.hasMatchingPassword(req.body.password)) {
        res.status(401).send('Incorrect password!');
      } else {
        req.login(user, (error) => {
          if (error) {
            next(error);
          } else {
            res.json(user);
          }
        });
      }
    })
    .catch(next);
});

router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      req.login(user, (error) => {
        if (error) {
          next(error);
        } else {
          res.json(user);
        }
      });
    })
    .catch(next);
});

router.delete('/logout', (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.sendStatus(204);
});

router.get('/me', (req, res, next) => {
  res.json(req.user);
});

module.exports = router;
