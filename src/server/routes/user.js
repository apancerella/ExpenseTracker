import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const users = await req.context.models.User.find().populate('Role');
    return res.send(users);
});

export default router;
