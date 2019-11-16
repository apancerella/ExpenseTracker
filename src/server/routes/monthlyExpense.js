import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const monthlyExpense = await req.context.models.MonthlyExpense.find().populate("ExpenseType");
  return res.send(monthlyExpense);
});

export default router;