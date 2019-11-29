import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const roles = await req.context.models.Role.find();
    return res.send(roles);
});

export default router;
