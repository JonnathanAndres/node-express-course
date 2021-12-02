require("dotenv").config(); // access environment variables
// async errors

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json()); // just to not forgett it (will not be used in this project)

app.get("/", (req, res) => {
  res.send(
    '<h1>Store API <a href="/api/v1/products">products route</a></h1>'
  );
});

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connect to DB
    app.listen(port, console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
