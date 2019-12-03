/* eslint-disable prefer-destructuring */
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import mongoose from 'mongoose';

import AppConfigs from './index';

const User = mongoose.model('User');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = AppConfigs.secret;

module.exports = (passport) => {
    passport.use(
        new JWTStrategy(opts, (jwtPayload, done) => {
            if (Date.now() > jwtPayload.exp) {
                return done('jwt expired');
            }

            User.findById(jwtPayload.id)
                .then((user) => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch((err) => console.log(err));
        })
    );
};
