const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dburi = "mongodb://localhost:27017/cinema"
const cinemaRoutes = require("./routes/cinemaRoutes");

// Connection
mongoose.connect(dburi, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    })
  .then(() => {
    console.log("db connected 🚀");
  })

// Angular Api
app.use(cors());
app.use(express.json())

// Urlencoded middleware
app.use(express.urlencoded({
  extended: true
}))

// Routes
app.use(cinemaRoutes);

// App
app.listen(5000, () => {
  console.log("listening on port 5000");
})
