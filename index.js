//home
//signup
//login
//navbar
//userauth
//usercontext
//app.jsx

//install dependencies from frontend

//framer motion
//motion.dev
//mdb

// import express
const express = require("express");

// importing routers
const userRouter = require('./routers/userRouter');
const rentRouter = require('./routers/rentRouter');
const utilRouter = require('./routers/util');

const cors = require('cors');

// initialize express app
const app = express();
const port = 5000;

// middleware

app.use(express.json());

app.use(cors({
  origin: [ 'http://localhost:3000' ]
}));

app.use('/user', userRouter);
app.use('/rent', rentRouter);
app.use('/util', utilRouter);

app.use(express.static('./uploads'));

// routes
app.get("/", (req, res) => {
  res.send("Response from express");
});

app.get("/add", (req, res) => {
  res.send("Response from add");
});

app.get("/getall", (req, res) => {
  res.send("Response from getall");
});

app.get("/delete", (req, res) => {
  res.send("Response from delete");
});

app.listen(port, () => {
  console.log("express server started at 5000");
});
