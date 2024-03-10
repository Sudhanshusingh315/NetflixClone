require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const mongdbConnectionString = process.env.MONGO_URL;
const authRouter = require("./routes/auth");

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

// Router
app.use("/api/auth", authRouter);

// Listeing to the server
app.listen(port, () => {
  console.log(`Port is listening to ${port}`);
});
