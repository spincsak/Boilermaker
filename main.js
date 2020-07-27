const app = require('./server');
const PORT = process.env.PORT || 8080;

//might need to add db stuff to this file as well

app.listen(port, () => {
  console.log(`listening and glistening on port ${PORT}`);
});
