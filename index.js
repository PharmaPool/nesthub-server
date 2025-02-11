const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const auth_route = require("./routes/authRoutes");
const user_route = require("./routes/userRoutes");
const member_route = require("./routes/memberRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Set headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, , X-Requested-With, Origin, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.get("/", (req, res, next) => res.send("Hello world !!!"));
app.use("/api/auth", auth_route);
app.use("/api/user", user_route);
app.use("/api/member", member_route);

async function deleteAllCollections() {
  await mongoose.connect(process.env.MONGO_URL);
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.drop();
    console.log(`Dropped collection: ${collection.collectionName}`);
  }

  console.log("All collections deleted.");
  await mongoose.connection.close();
}
// deleteAllCollections();
// connect to database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database connect successfully"))
  .catch((err) => console.log(err));

app.listen(8000, () => console.log("server started"));
