const router = require("express").Router();
const Movie = require("../Models/Movies");
const verify = require("../routes/verified");

// CRUD on movies

// Create a movie
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const newMovie = await Movie.create(req.body);
      res.status(201).json(newMovie);
    } catch (err) {
      res.status(400).json(err.message);
    }
  } else {
    res.status(403).json("You are not an Admin");
  }
});

// Updating a movie
router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    // using findByIdAndUpdate because there are no pre hooks
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
    } catch (err) {
      req.status(200).json(err.message);
    }
  } else {
    res.status(403).json("You are not an Admin");
  }
});

// Delete

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    // using findByIdAndUpdate because there are no pre hooks
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("User Deleted Successfully");
    } catch (err) {
      req.status(400).json(err.message);
    }
  } else {
    res.status(403).json("You are not an Admin");
  }
});


// Get all the present
// i want to search through queries as well

router.get("/",verify,async(req,res)=>{
  const {type} = req.query;
  try{
      const movieList = await Movie.find()
      console.log("sendig movie to front");
      res.status(200).json(movieList);
  
  }catch(err){
    res.json(err.message);
  }
})


// Get specifin Id
router.get("/find/:id", verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get Random
// router.get("/random", verify, async (req, res) => {
router.get("/random", async (req, res) => {
  const type = req.query.types;
  let movie;
  try {
    if (type === "series") {
      console.log("inside ths series tab")
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(movie);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
