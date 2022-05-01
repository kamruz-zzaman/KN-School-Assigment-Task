const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    full_name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    role:{type: String, default: 'student', required:true},
    password: {type: String, required: true},
    updated_at: { type: Date, default: Date.now },
})

const User = mongoose.model('User', userSchema);

module.exports= User;