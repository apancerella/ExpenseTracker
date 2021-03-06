import { Router } from 'express';

import incomeType from './incomeType';
import expenseType from './expenseType';
import role from './role';
import monthlyIncome from './monthlyIncome';
import monthlyExpense from './monthlyExpense';
import user from './user';

const router = Router();

router.use('/incomeTypes', incomeType);
router.use('/expenseTypes', expenseType);
router.use('/roles', role);
router.use('/monthlyIncomes', monthlyIncome);
router.use('/monthlyExpenses', monthlyExpense);
router.use('/users', user);

export default router;
