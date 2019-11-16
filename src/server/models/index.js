import mongoose from 'mongoose';
import IncomeType from './incomeType';
import ExpenseType from './expenseType';
import Role from './role';
import MonthlyIncome from './monthlyIncome';
import MonthlyExpense from './monthlyExpense';
import User from './user';
import Account from './account';

export const connectDb = (dbString) => mongoose.connect(dbString, { useNewUrlParser: true });

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
