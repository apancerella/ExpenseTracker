import mongoose from 'mongoose';

const incomeTypeSchema = new mongoose.Schema({
    IncomeType: {
        type: String,
        unique: true
    }
});

const IncomeType = mongoose.model('IncomeType', incomeTypeSchema);

export default IncomeType;
