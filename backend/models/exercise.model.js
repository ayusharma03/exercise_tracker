const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ExerciseSchema = new schema({
    username:{
        type: String,
        required: true,
    }
    ,description:{
        type:String,
        required: true,
    }
    ,duration:{
        type:Number,
        required: true,
    }
    ,date:{
        type:Date,
        required: true,
    }    
},
    {   
    timestamp: true
    }
);

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
