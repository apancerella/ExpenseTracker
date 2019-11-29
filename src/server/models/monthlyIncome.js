import mongoose from 'mongoose';

const monthlyIncomeSchema = new mongoose.Schema({
    Name: String,
    Amount: Number,
    Description: String,
    IncomeType: { type: mongoose.Schema.Types.ObjectId, ref: 'IncomeType', index: true }
});

const MonthlyIncome = mongoose.model('MonthlyIncome', monthlyIncomeSchema);

export default MonthlyIncome;
