const router = require("express").Router();
const User = require("../Models/User");

// Registering a user
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await User.create({
      username: username,
      email: email,
      password: password,
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
    res.status(401).send(`Welcome ${user.username}`);

    return;
  } else {
    res.status(500).send("Email or Password in incorrect");
  }
});

module.exports = router;
