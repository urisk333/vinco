'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
const db = require('./models/index');
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
  try {
    await db.sequelize.sync();
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server is UP at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
})();
