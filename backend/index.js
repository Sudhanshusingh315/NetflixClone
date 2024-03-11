require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const mongdbConnectionString = process.env.MONGO_URL;
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const movieRouter = require("./routes/movies");
const listRouter = require('./routes/lists');
const app = express();
// body parser
app.use(express.json());
const mongoose = require("mongoose");
main().catch((err) => console.log(err.message));
// Connecting the mongoose
async function main() {
  await mongoose.connect(mongdbConnectionString);
  console.log("connected to mongodb");
}

// Auth Router
app.use("/api/auth", authRouter);

// User Router [CRUD]
app.use('/api/user',userRouter);

// Movie Router [CRUD]

app.use('/api/movie',movieRouter);

// List Router [CRUD]

app.use('/api/list',listRouter);


// Listeing to the server
app.listen(port, () => {
  console.log(`Port is listening to ${port}`);
});
