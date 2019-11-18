import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import compression from 'compression';
import path from 'path';

import AppConfigs from './configs';
import models, { connectDb } from './models';
import routes from './routes';
import seed from './seed_data';

const app = express();

// app.use(cors());
// app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models
  };
  next();
});

app.use('/api', routes);
console.log("************************************************************")
console.log(AppConfigs.environment)
if(AppConfigs.environment === 'production'){
  app.use(express.static('../client/build'));
  app.get('*', () => (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
  });
}



connectDb(AppConfigs.database).then(async () => {
  if (AppConfigs.eraseDatabaseOnSync) {
    await Promise.all([
      models.IncomeType.deleteMany({}),
      models.ExpenseType.deleteMany({}),
      models.Role.deleteMany({}),
      models.MonthlyIncome.deleteMany({}),
      models.MonthlyExpense.deleteMany({}),
      models.User.deleteMany({}),
      models.Account.deleteMany({})
    ]);

    await seed.createIncomeTypes();
    await seed.createExpenseTypes();
    await seed.createRoles();
    await seed.createMonthlyIncomes();
    await seed.createMonthlyExpenses();
    await seed.createUsers();
    await seed.createAccounts();
  }

  app.listen(process.env.PORT || 3000, () =>
    console.log(`Example app listening on port ${process.env.PORT || 3000}!`),
  );
});
