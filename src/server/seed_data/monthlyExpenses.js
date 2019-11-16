import models from '../models';

const createMonthlyExpenses = async () => {

    await models.ExpenseType.findOne({ ExpenseType: "Entertainment" }).exec()
        .then((expenseType) => (new models.MonthlyExpense({ 
            Name: "Netflix",
            Amount: 11.99,
            Description: "",
            ExpenseType: expenseType._id
        }))).then((doc) => doc.save());

    await models.ExpenseType.findOne({ ExpenseType: "Entertainment" }).exec()
        .then((expenseType) => (new models.MonthlyExpense({ 
            Name: "Hulu",
            Amount: 45,
            Description: "",
            ExpenseType: expenseType._id
        }))).then((doc) => doc.save());

    await models.ExpenseType.findOne({ ExpenseType: "Housing" }).exec()
        .then((expenseType) => (new models.MonthlyExpense({ 
            Name: "Apartment Rent",
            Amount: 1210,
            Description: "",
            ExpenseType: expenseType._id
        }))).then((doc) => doc.save());

    await models.ExpenseType.findOne({ ExpenseType: "Savings" }).exec()
        .then((expenseType) => (new models.MonthlyExpense({ 
            Name: "Roth IRA",
            Amount: 50,
            Description: "",
            ExpenseType: expenseType._id
        }))).then((doc) => doc.save());

    await models.ExpenseType.findOne({ ExpenseType: "Utilities" }).exec()
        .then((expenseType) => (new models.MonthlyExpense({ 
            Name: "Utilities",
            Amount: 130,
            Description: "",
            ExpenseType: expenseType._id
        }))).then((doc) => doc.save());

    await models.ExpenseType.findOne({ ExpenseType: "Entertainment" }).exec()
        .then((expenseType) => (new models.MonthlyExpense({ 
            Name: "HBO",
            Amount: 15,
            Description: "",
            ExpenseType: expenseType._id
        }))).then((doc) => doc.save());

    await models.ExpenseType.findOne({ ExpenseType: "Personal" }).exec()
        .then((expenseType) => (new models.MonthlyExpense({ 
            Name: "Gym Membership",
            Amount: 49.99,
            Description: "",
            ExpenseType: expenseType._id
        }))).then((doc) => doc.save());
  };

export default createMonthlyExpenses;