const express = require('express');
const cors = require('cors');
const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app
.use(cors())
.use('/', require('./routes'))
;

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => console.log(`Database is listening and node Running on port ${port}`));
  }
});
