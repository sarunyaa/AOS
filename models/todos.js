const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema & model
const TodoSchema = new Schema({
  date: {
    type: String,
    required: [true, 'Date field is required']
  },
  description:{
    type:String,
    required: [true, 'Description field is required']
  },
  priorite:{
    type: Boolean,
    default:true
  }
});

const Todo = mongoose.model('todo', TodoSchema);
module.exports=Todo;
