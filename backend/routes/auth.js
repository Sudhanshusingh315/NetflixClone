const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../Models/User");

// Registering a user, or Creating the user
router.post("/register", async (req, res) => {
  const { username, email, password,isAdmin } = req.body;
  try {
    const newUser = await User.create({
      username: username,
      email: email,
      password: password,
      isAdmin:isAdmin,
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Login a user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_KEY, {
      expiresIn: "5d",
    });
    res.status(200).json(token );

    return;
  } else {
    res.status(401).send("Email or Password in incorrect");
  }
});

module.exports = router;
