const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");
require('dotenv').config()
const notFound = require('./middleware/not-found')

// middleware

app.use(express.static('./public'))
app.use(express.json()); //data in req.body


// routes
app.use("/api/v1/tasks", tasksRoutes);

app.use(notFound);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, (req, res) => {
      console.log(`Server listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
