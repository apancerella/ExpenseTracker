import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        await req.context.models.MonthlyIncome.find().populate('IncomeType')
            .then((monthlyIncomes) => {
                res.send(monthlyIncomes);
            }).catch((err) => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving monthly incomes.'
                });
            });
    });

router.get('/monthlyIncomeId',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        await req.context.models.MonthlyIncome.findById(req.params.monthlyIncomeId)
            .then((monthlyIncomeId) => {
                if (!monthlyIncomeId) {
                    return res.status(404).send({
                        message: `Monthly income not found with id ${req.params.monthlyIncomeId}`
                    });
                }
                res.send(monthlyIncomeId);
            }).catch((err) => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: `Monthly income not found with id ${req.params.monthlyIncomeId}`
                    });
                }
                return res.status(500).send({
                    message: `Error retrieving monthly income with id ${req.params.monthlyIncomeId}`
                });
            });
    });

router.post('/',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        if (!req._body) {
            return res.status(400).send({
                message: 'Monthly income content can not be empty'
            });
        }

        const monthlyIncome = new req.context.models.MonthlyIncome({
            Name: req.body.Name || '',
            Amount: Number(req.body.Amount) || 0,
            Description: req.body.Description || '',
            IncomeType: (req.body.IncomeType) ? req.body.IncomeType._id : null
        });

        await monthlyIncome.save()
            .then((data) => res.send(data))
            .catch((err) => res.status(500).send({
                message: err.message || 'Some error occurred while creating the monthly income.'
            }));
    });

router.put('/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        if (!req._body) {
            return res.status(400).send({
                message: 'Monthly income content can not be empty'
            });
        }

        req.context.models.MonthlyIncome.findByIdAndUpdate(req.params.id, {
            Name: req.body.Name || 'Untitled Monthly income',
            Amount: Number(req.body.Amount) || 0,
            Description: req.body.Description || '',
            IncomeType: (req.body.IncomeType) ? req.body.IncomeType._id : null
        }, { new: true })
            .then((note) => {
                if (!note) {
                    return res.status(404).send({
                        message: `Monthly income not found with id ${req.params.id}`
                    });
                }
                return res.send(note);
            }).catch((err) => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: `Monthly income not found with id ${req.params.id}`
                    });
                }
                return res.status(500).send({
                    message: `Error updating note with id ${req.params.id}`
                });
            });
    });

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        await req.context.models.MonthlyIncome
            .findByIdAndRemove(req.params.id).then((monthlyIncome) => {
                if (!monthlyIncome) {
                    return res.status(404).send({
                        message: `Monthly income not found with id ${req.params.id}`
                    });
                }
                return res.send({ message: 'Monthly income deleted successfully!' });
            }).catch((err) => {
                if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                    return res.status(404).send({
                        message: `Monthly income not found with id ${req.params.id}`
                    });
                }
                return res.status(500).send({
                    message: `Could not delete monthly income with id ${req.params.id}`
                });
            });
    });

export default router;
