// TBD
//routes for items
const express = require("express");
const router = express.Router();

//Item model
const Post = require("../../models/post");

// @ route GET api/items
// @ desc get all items
// @ access Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => {
      res.json(posts);
    });
});

// @ route POST api/blog
// @ post an item
// @ access Public
router.post("/", (req, res) => {
  console.log("------------------>", req.body);
  const newPost = new Post({
    title: req.body.title,
    rant: req.body.rant,
    author: req.body.author
  });

  newPost.save().then(post => res.json(post));
});

// @ route POST api/blog
// @ delete a post
// @ access Public
router.delete("/:id", (req, res) => {
  //
  Post.findById(req.params.id)
    .then(post => post.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
