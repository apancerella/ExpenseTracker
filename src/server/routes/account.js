import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const accounts = await req.context.models.Account.find().populate('User');
    return res.send(accounts);
});

router.get('/:id', async (req, res) => {
    const account = await req.context.models.Account.findById(req.params.id).populate('User');
    return res.send(account);
});

router.get('/ByName/:firstname/:lastname', async (req, res) => {
    const account = await req.context.models.Account.findOne({
        FirstName: req.params.firstname,
        LastName: req.params.lastname
    }).populate('User');
    return res.send(account);
});

export default router;
