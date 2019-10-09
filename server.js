require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const itemRoutes = require("./routes/api/itemRoutes");
const blogRoutes = require("./routes/api/blogRoutes");

const app = express();
//body parser middleware
app.use(bodyParser.json());
const db = process.env.MONGO_URI;

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//use Routes
app.use("/api/items", itemRoutes);
app.use("/api/blog", blogRoutes);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`server started on port ${port}`));
