import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const expenseTypes = await req.context.models.ExpenseType.find();
    return res.send(expenseTypes);
});

export default router;
