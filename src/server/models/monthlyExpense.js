import mongoose from 'mongoose';

const monthlyExpenseSchema = new mongoose.Schema({
    Name: String,
    Amount: Number,
    Description: String,
    ExpenseType: { type: mongoose.Schema.Types.ObjectId, ref: "ExpenseType", index: true }
});

const MonthlyExpense = mongoose.model('MonthlyExpense', monthlyExpenseSchema);

export default MonthlyExpense; 