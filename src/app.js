const express = require("express");
const app = express();
// logger
const morgan = require("morgan");
const helmet = require("helmet");
// const cors = require("cors");
const compression = require("compression");

// init middleware
// logger dev
app.use(morgan("dev"));

// logger prod
// app.use(morgan("combined"));
app.use(helmet());
// app.use(cors());
app.use(compression());

// init db
require("./dbs/init.mongodb");
const { checkOverload } = require("./helpers/check.connect");
checkOverload();

// init routes
app.use("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});

// error handling


module.exports = app;
