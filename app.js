const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usersRouter = require("./routes/user.js");
const productsRouter = require("./routes/product.js");
const cors = require('cors');

const app = express();

app.use(cors());

  app.use(express.json({limit: "19kb"}))
  app.use(express.urlencoded()) 

const PORT = 3000;


mongoose.connect(process.env.DB_CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());

app.use('/products', productsRouter);
app.use('/user', usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

