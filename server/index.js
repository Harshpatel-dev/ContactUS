const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const contactRouter = require("./routs/contactUSRoute");

dotenv.config({ path: "./config.env" });
const app = express();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_ENCODED_PASSWORD
);
console.log("hello");

console.log(DB);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("DB CONNECTION SUCCESFULLY");
  });

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});



app.use("/api/v1/contactUs", contactRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is Running on ${port}`);
});
