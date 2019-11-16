import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const incomeTypes = await req.context.models.IncomeType.find();
  return res.send(incomeTypes);
});

// router.get('/:userId', async (req, res) => {
//   const user = await req.context.models.User.findById(
//     req.params.userId,
//   );
//   return res.send(user);
// });

export default router;
