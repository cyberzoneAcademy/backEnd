const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    question:{
        type: String,
        required: true
    },
    answer:{
        type: [String],
        required: true
    },
    correct_answer:{
        type: [String],
        required: true
    },
    unit_id:{
        type: String,
        required: true
    }
}, {timeseries: true})


module.exports = mongoose.model('exercise', exerciseSchema)