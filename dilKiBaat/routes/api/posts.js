const express = require('express');
const router = express.Router();



const Post = require('../../models/Posts')

router.post('/', async(req, res) => {
  try {
    console.log(req.body)
    const newPost = new Post({
      text: req.body.text
    })
    const post = await newPost.save();
    res.json(post)
  } catch (error) {
    console.error('server error')
  }
})

router.get('/', async(req, res) => {
  try {
    const posts = await Post.find().sort({date: -1})
    res.json(posts)
  } catch (error) {
    console.error(err.message)

  }
})

module.exports = router;