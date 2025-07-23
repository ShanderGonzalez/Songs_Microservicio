require('./config/env');
const express = require('express');
const connectDB = require('./config/database');
const routes = require('./infrastructure/http/routes/song.routes');
const errorHandler = require('./infrastructure/http/middlewares/errorHandler');

const app = express();
app.use(express.json());

app.use('/songs', routes);
app.use(errorHandler);

connectDB().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
