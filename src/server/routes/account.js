import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const accounts = await req.context.models.Account.find().populate("User");
  return res.send(accounts);
});

router.get('/:firstName/:lastName', async (req, res) => {
  let firstName = req.params.firstName;
  let lastName = req.params.lastName;
  const account = await req.context.models.Account.findOne({
    FirstName: firstName,
    LastName: lastName
  });
  console.log(acc)
  return res.send(account);
});

export default router;