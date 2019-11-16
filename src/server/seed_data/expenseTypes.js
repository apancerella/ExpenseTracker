import models from '../models';

const createExpenseTypes = async () => {
    const expenseType1 = new models.ExpenseType({ ExpenseType: 'Transportation' });
    const expenseType2 = new models.ExpenseType({ ExpenseType: 'Food' });
    const expenseType3 = new models.ExpenseType({ ExpenseType: 'Utilities' });
    const expenseType4 = new models.ExpenseType({ ExpenseType: 'Clothing' });
    const expenseType5 = new models.ExpenseType({ ExpenseType: 'Medical/Healthcare' });
    const expenseType6 = new models.ExpenseType({ ExpenseType: 'Insurance' });
    const expenseType7 = new models.ExpenseType({ ExpenseType: 'Household Items/Supplies' });
    const expenseType8 = new models.ExpenseType({ ExpenseType: 'Personal' });
    const expenseType9 = new models.ExpenseType({ ExpenseType: 'Debt' });
    const expenseType10 = new models.ExpenseType({ ExpenseType: 'Retirement' });
    const expenseType11 = new models.ExpenseType({ ExpenseType: 'Education' });
    const expenseType12 = new models.ExpenseType({ ExpenseType: 'Savings' });
    const expenseType13 = new models.ExpenseType({ ExpenseType: 'Gifts/Donations' });
    const expenseType14 = new models.ExpenseType({ ExpenseType: 'Entertainment' });
    const expenseType15 = new models.ExpenseType({ ExpenseType: 'Housing' });

  
    await expenseType1.save();
    await expenseType2.save();
    await expenseType3.save(); 
    await expenseType4.save(); 
    await expenseType5.save(); 
    await expenseType6.save(); 
    await expenseType7.save(); 
    await expenseType8.save(); 
    await expenseType9.save(); 
    await expenseType10.save();
    await expenseType11.save();
    await expenseType12.save();
    await expenseType13.save();
    await expenseType14.save();
    await expenseType15.save();
  };

export default createExpenseTypes;