const express = require('express');
const cors = require('cors');
const router = require('./router.js');
const { connectDB } = require('./models');

// require('dotenv').config();
// const { PORT } = require("/")

const app = express();
const PORT = 3000;  //TODO: move to config - make dynamic with .env

app.use(cors());
app.use(express.json());
app.use(router);

app.use((_req, res) => {
  res.status(404).send('This route does not exist');
});

(async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
})();
