import mongoose from 'mongoose';
import IncomeType from './incomeType';
import ExpenseType from './expenseType';
import Role from './role';
import MonthlyIncome from './monthlyIncome';
import MonthlyExpense from './monthlyExpense';
import User from './user';
import Account from './account';
import seed from '../seed_data';

export const connectDb = (dbString, eraseDatabaseOnSync) =>
  mongoose.connect(dbString,
    {
      useNewUrlParser: true
    })
    .then(async () => {
      if (eraseDatabaseOnSync) {
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
    });;

const models = { 
  IncomeType,
  ExpenseType,
  Role,
  MonthlyIncome,
  MonthlyExpense,
  User,
  Account
};

export default models;
