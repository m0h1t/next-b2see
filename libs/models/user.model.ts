import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: false },
    userName: { type: String, required: true },
    type: { type: String, required: true },
    years: { type: Number, required: false }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;