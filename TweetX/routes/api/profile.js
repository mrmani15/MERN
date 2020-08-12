const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

const Profile = require('../../models/Profile')
const User = require('../../models/User')

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' })
    }
    res.json(profile)

  } catch (err) {
    console.log(err.message)
    res.status(500).send("Server Error")
  }
})

router.post('/', auth, async (req, res) => {
  const { post, follower, following } = req.body

  const profileField = {}
  profileField.user = req.user.id
  if (post) {
    profileField.post = post.split(',').map(post => post.trim())
  }
  if (follower) {
    profileField.follower = follower.split(',').map(follower => follower.trim())
  }
  if (following) {
    profileField.following = following.split(',').map(following => following.trim())
  }

  try {
    let profile = await Profile.findOne({ user: req.user.id })

    if (profile) {
      profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileField }, { new: true })
      return res.json(profile)
    }
     
    profile = new Profile( profileField)
    await profile.save()
    res.json(profile)

  } catch (err) {
    console.log(err.message)
    res.status(500).send("Server error")
  }
  console.log(profileField)
  res.send('Hello')
})

router.get('/', async(req, res)=> {
  try{
    const profiles = await User.find().populate('user', ['name', 'avatar'])
    res.json(profiles)
  } catch (err){
    console.log(err.message)
    res.status(500).send("Server Error")
  }
})

module.exports = router