import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    await req.context.models.MonthlyExpense.find().populate('ExpenseType')
        .then((monthlyExpenses) => {
            res.send(monthlyExpenses);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving monthly expenses.'
            });
        });
});

router.post('/', async (req, res) => {
    if (!req._body) {
        return res.status(400).send({
            message: 'Monthly expense content can not be empty'
        });
    }

    const monthlyExpense = new req.context.models.MonthlyExpense({
        Name: req.body.Name || '',
        Amount: Number(req.body.Amount) || 0,
        Description: req.body.Description || '',
        ExpenseType: (req.body.ExpenseType) ? req.body.ExpenseType._id : null
    });

    await monthlyExpense.save()
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send({
            message: err.message || 'Some error occurred while creating the monthly expense.'
        }));
});

router.put('/:id', async (req, res) => {
    if (!req._body) {
        return res.status(400).send({
            message: 'Monthly expense content can not be empty'
        });
    }

    req.context.models.MonthlyExpense.findByIdAndUpdate(req.params.id, {
        Name: req.body.Name || 'Untitled Monthly expense',
        Amount: Number(req.body.Amount) || 0,
        Description: req.body.Description || '',
        ExpenseType: (req.body.ExpenseType) ? req.body.ExpenseType._id : null
    }, { new: true })
        .then((note) => {
            if (!note) {
                return res.status(404).send({
                    message: `Monthly expense not found with id ${req.params.id}`
                });
            }
            return res.send(note);
        }).catch((err) => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: `Monthly expense not found with id ${req.params.id}`
                });
            }
            return res.status(500).send({
                message: `Error updating note with id ${req.params.id}`
            });
        });
});

router.delete('/:id', async (req, res) => {
    await req.context.models.MonthlyExpense
        .findByIdAndRemove(req.params.id).then((monthlyExpense) => {
            if (!monthlyExpense) {
                return res.status(404).send({
                    message: `Monthly expense not found with id ${req.params.id}`
                });
            }
            return res.send({ message: 'Monthly expense deleted successfully!' });
        }).catch((err) => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: `Monthly expense not found with id ${req.params.id}`
                });
            }
            return res.status(500).send({
                message: `Could not delete monthly expense with id ${req.params.id}`
            });
        });
});

export default router;
