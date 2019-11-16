import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
    Salary: Number,
    Job: String,
    Company: String,
    User: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true }
});

const Account = mongoose.model('Account', accountSchema);

export default Account; 