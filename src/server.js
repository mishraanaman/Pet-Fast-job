console.log("*----  Welcome to Pet Management Solution ---*");

const http = require("http");
const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
const app = require("./app");

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("Mongoose Connection is ready!");
});
mongoose.connection.on("error", (err) => {
  console.error(`Mongoose Connection Error ${err}`);
});

async function startServer() {
  mongoose.set('strictQuery', false);
  await mongoose.connect(MONGO_URL);

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
