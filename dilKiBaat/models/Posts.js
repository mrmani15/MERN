const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  date :{
    type: Date,
    default: Date.now
  }
})

module.exports = Post = mongoose.model('post', PostSchema)