const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const routes = require('./src/routes');



// cors
app.use(cors());
// body parser
app.use(bodyParser.json({ limit: '2MB' } ));

// load routes
routes(app);

// set mongoose
mongoose.set('useFindAndModify', false);
mongoose.connection.on('error', err => {
  console.error('Error connecting to MongoDB!!!', err);
});

mongoose
  .connect('mongodb://localhost:32768/react-api', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(
      3000, 
      () => console.log(`listen on port 3000`)
    );
  });
