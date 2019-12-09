/* eslint-disable no-shadow */
import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import passport from 'passport';

import AppConfigs from '../configs';
import validateRegisterInput from '../validation/register';
import validateLoginInput from '../validation/login';

const router = Router();

router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        const users = await req.context.models.User.findById(req.params.id);// .populate('Role');
        return res.send(users);
    });

router.post('/register', (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) { return res.status(400).json(errors); }

    req.context.models.User.findOne({ email: req.body.Email }).then((user) => {
        if (user) {
            return res.status(400).json({ email: 'Email already exists' });
        }
        const newUser = new req.context.models.User({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Password: req.body.Password
        });

        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.Password, salt, (err, hash) => {
                if (err) throw err;
                newUser.Password = hash;
                newUser
                    .save()
                    .then((user) => res.json(user))
                    .catch((err) => console.log(err));
            });
        });
    });
});

router.post('/login', (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) { return res.status(400).json(errors); }

    const { Email, Password } = req.body;

    req.context.models.User.findOne({ Email }).then((user) => {
        if (!user) {
            return res.status(404).json({ message: 'Email not found' });
        }

        bcrypt.compare(Password, user.Password).then((isMatch) => {
            if (isMatch) {
                const payload = { user };
                payload.user.Password = undefined;

                return jwt.sign(
                    payload,
                    AppConfigs.secret,
                    { expiresIn: Date.now() + 86400 },
                    (err, token) => { res.json({ success: true, token: `Bearer ${token}` }); }
                );
            } 

            return res.status(400).json({ message: 'Password incorrect' });
        });
    });
});

export default router;
