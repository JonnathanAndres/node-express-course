const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");
require('dotenv').config()

// middleware

app.use(express.json()); //data in req.body

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasksRoutes);

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
