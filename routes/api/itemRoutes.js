//routes for items
const express = require("express");
const router = express.Router();

//Item model
const Item = require("../../models/item");

// @ route GET api/items
// @ desc get all items
// @ access Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => {
      res.json(items);
    });
});

// @ route POST api/item
// @ post an item
// @ access Public
router.post("/", (req, res) => {
  //console.log("-->", req.body.name);
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @ route POST api/item
// @ delete an item
// @ access Public
router.delete("/:id", (req, res) => {
  //
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
