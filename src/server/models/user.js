import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Salary: {
        type: Number,
        default: 100000
    },
    Job: {
        type: String,
        default: 'Software Developer'
    },
    Company: {
        type: String,
        default: 'Test Company Inc.'
    }
    // Role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', index: true }
});

const User = mongoose.model('User', userSchema);

export default User;
