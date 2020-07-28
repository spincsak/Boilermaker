const app = require('./server');
const PORT = process.env.PORT || 8080;
const db = require('./server/db/db.js');

db.sync().then(() => {
  console.log('db is synced');

  app.listen(PORT, () => {
    console.log(`listening and glistening on port ${PORT}`);
  });
});
