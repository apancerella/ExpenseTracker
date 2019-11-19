import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import compression from 'compression';
import path from 'path';

import AppConfigs from './configs';
import models, { connectDb } from './models';
import routes from './routes';

const app = express();

connectDb(AppConfigs.database, AppConfigs.eraseDatabaseOnSync);

// app.use(cors());
// app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(async (req, res, next) => {
  req.context = { models };
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({ message: Welcome });
});
app.use('/api', routes);

// if(AppConfigs.environment === 'production'){
//   app.use(express.static('../client/build'));
//   app.get('*', () => (req, res) => {
//     res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
//   });
//   console.log(path.join(__dirname, '../client', 'build', 'index.html'))
// }

app.listen(AppConfigs.port, () =>
  console.log(`Example app listening on port ${AppConfigs.port}!`),
);
