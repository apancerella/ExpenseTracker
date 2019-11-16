import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const accounts = await req.context.models.Account.find().populate("User");
  return res.send(accounts);
});

export default router;