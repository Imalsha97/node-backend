const mongoose = require('mongoose');

//make the schema
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    tTitle : {
        type: String,
        required: true
    },
    tStatus : {
        type: String,
       
    }
    
})
//table name Student1
const Todo = mongoose.model("Todo",todoSchema);
module.exports =  Todo;