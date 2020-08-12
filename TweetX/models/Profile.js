const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  post: {
    type: [String]
  },
  follower: {
    type: [String]
  },
  following: {
    type: [String]
  }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)