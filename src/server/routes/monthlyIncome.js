import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const monthlyIncome = await req.context.models.MonthlyIncome.find().populate("IncomeType");
  return res.send(monthlyIncome);
});

export default router;