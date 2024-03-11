const router = require("express").Router();
const verify = require("../routes/verified");
const List = require("../Models/List");

// List CRUD

// Create
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const newList = await List.create(req.body);
      res.status(200).json(newList);
    } catch (err) {
      res.status(500).send("User is not Admin");
    }
  } else {
    res.status(400).send("Not can admin");
  }
});

// Get
router.get("/", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      }
      else{
        list = await List.aggregate([

          { $sample: { size: 10 } },
          { $match: { type: typeQuery} },
        ])
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200),json(list);
  } catch (err) {
    res.send(err.message);
  }
});
// Update
// Detele
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.send("List has been deleted");
    } catch (err) {
      res.send(err.message);
    }
  } else {
    res.send("User is not Admin");
  }
});

module.exports = router;
