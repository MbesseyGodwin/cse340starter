/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/

/* ***********************
 * Require Statements
 *************************/
const baseController = require("./controllers/baseController");
const inventoryRoute = require("./routes/inventoryRoute");

const express = require("express");
const env = require("dotenv").config();
const expressLayouts = require("express-ejs-layouts");
const path = require('path');  // Added line

const app = express();

/* ***********************
 * Routes
 *************************/
app.use(require("./routes/static"));
// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// index route

app.get("/",baseController.buildHome);
app.use("/inv", inventoryRoute);

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout"); // not at views root

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT;
const host = process.env.HOST;

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`);
});
