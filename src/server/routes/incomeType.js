import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const incomeTypes = await req.context.models.IncomeType.find();
    return res.send(incomeTypes);
});

export default router;
