import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    Role: {
        type: String,
        unique: true
    }
});

const Role = mongoose.model('Role', roleSchema);

export default Role;
