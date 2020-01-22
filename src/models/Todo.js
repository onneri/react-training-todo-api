//require
const mongoose = require('mongoose');



const TodoSchema = new mongoose.Schema(
  {
    content: {
      type: String
    },
    done: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;