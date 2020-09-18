const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const connectDb = () => {
  mongoose.connect(
    'mongodb+srv://krutakova:PSyFbaVLR4NUdecG@cluster0.qmq9e.mongodb.net/bestrunner?retryWrites=true&w=majority',
    {
    useNewUrlParser: true,
    useFindAndModify: false
  });

  return mongoose.connection;
};

const startServer = () => {
  app.listen(8080, () => {
    console.log(`Started api`);
  });
};

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin','http://localhost:4200' );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});
app.use('/api', routes);

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);
