import models from '../models';

const createMonthlyIncomes = async () => {

    await models.IncomeType.findOne({ IncomeType: "Salary" }).exec()
        .then((incomeType) => (new models.MonthlyIncome({ 
            Name: "Monthly Salary",
            Amount: 2100,
            Description: "",
            IncomeType: incomeType._id
        }))).then((doc) => doc.save());

    await models.IncomeType.findOne({ IncomeType: "Salary" }).exec()
        .then((incomeType) => (new models.MonthlyIncome({ 
            Name: "Fixed Account Interest",
            Amount: 200,
            Description: "",
            IncomeType: incomeType._id
        }))).then((doc) => doc.save());

    await models.IncomeType.findOne({ IncomeType: "Salary" }).exec()
        .then((incomeType) => (new models.MonthlyIncome({ 
            Name: "Transport Allowance",
            Amount: 50,
            Description: "",
            IncomeType: incomeType._id
        }))).then((doc) => doc.save());

    await models.IncomeType.findOne({ IncomeType: "Salary" }).exec()
        .then((incomeType) => (new models.MonthlyIncome({ 
            Name: "Sub-Leasing Profits",
            Amount: 3500,
            Description: "",
            IncomeType: incomeType._id
        }))).then((doc) => doc.save());

  };

export default createMonthlyIncomes;