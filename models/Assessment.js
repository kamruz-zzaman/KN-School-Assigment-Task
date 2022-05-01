const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    mentor_id: {type: String, required: true},
    // deadline: { type: Date, default: Date.now, required: true},
    deadline: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})

const Assessment = mongoose.model('Assessment', assessmentSchema);

module.exports= Assessment;