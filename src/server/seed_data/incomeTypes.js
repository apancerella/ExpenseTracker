import models from '../models';

const createIncomeTypes = async () => {
    const incomeType1 = new models.IncomeType({
      IncomeType: 'Stocks'
    });
  
    const incomeType2 = new models.IncomeType({
      IncomeType: 'Salary'
    });
  
    await incomeType1.save();
    await incomeType2.save();
  };

export default createIncomeTypes;