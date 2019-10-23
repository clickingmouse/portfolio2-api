require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const itemRoutes = require("./routes/api/itemRoutes");
const blogRoutes = require("./routes/api/blogRoutes");
const userRoutes = require("./routes/api/userRoutes");
const authRoutes = require("./routes/api/authRoutes");
const app = express();
//body parser middleware
app.use(bodyParser.json());
const db = process.env.MONGO_URI;

//Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//use Routes
app.use("/api/items", itemRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`server started on port ${port}`));
