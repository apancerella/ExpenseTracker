/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-console */
import mongoose from 'mongoose';
import IncomeType from './incomeType';
import ExpenseType from './expenseType';
import Role from './role';
import MonthlyIncome from './monthlyIncome';
import MonthlyExpense from './monthlyExpense';
import User from './user';
import seed from '../seed_data';

const models = {
    IncomeType,
    ExpenseType,
    Role,
    MonthlyIncome,
    MonthlyExpense,
    User
};

export const connectDb = (dbString, eraseDatabaseOnSync) => mongoose.connect(dbString,
    {
        useCreateIndex: true,
        useNewUrlParser: true
    })
    .then(async () => {
        console.log('Success: Database connected.');
        if (eraseDatabaseOnSync) {
            await Promise.all([
                models.IncomeType.deleteMany({}),
                models.ExpenseType.deleteMany({}),
                models.Role.deleteMany({}),
                models.MonthlyIncome.deleteMany({}),
                models.MonthlyExpense.deleteMany({}),
                models.User.deleteMany({})
            ]).then(async () => {
                await seed.createIncomeTypes();
                await seed.createExpenseTypes();
                await seed.createRoles();
                await seed.createMonthlyIncomes();
                await seed.createMonthlyExpenses();
            }).then(() =>
                console.log('Success: Database synchronized')).catch((err) => {
                console.log('Error: Unable to sync database', err);
                throw err;
            });
        }
    }).catch((err) => {
        console.log('Error: Could not connect to database.', err);
        console.log('Exiting now...');
        process.exit();
    });


export default models;
