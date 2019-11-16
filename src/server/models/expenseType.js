import mongoose from 'mongoose';

const expenseTypeSchema = new mongoose.Schema({
  ExpenseType: {
    type: String,
    unique: true,
  }
});

const ExpenseType = mongoose.model('ExpenseType', expenseTypeSchema);

export default ExpenseType;