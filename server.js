//roll through the lifecycle stages of the tourney

////error handling
///login
//invalid email address
//PW not correct
///create account
//invalid email address
//email address already exists
//name is already in use
///edit account
//name is already in use

//roll through the lifecycle stages of the tourney

//add forgot PW feature to login/create account pages

////rules page
//adjust rules/scoring accordingly
//adjust payment and submitting info too

////create account & login page
//auto hide the pw when you are entering your info

const express = require("express");
const app = express();
const { syncAndSeed } = require("./src/server/db/postgres_info.js");
const path = require("path");

app.use(express.json());

app.use("/dist", express.static(path.join(__dirname, "dist")));

app.use("/public/css", express.static(path.join(__dirname, "public/css")));
app.use("/public/pics", express.static(path.join(__dirname, "public/pics")));

app.use("/", require("./src/server/routers/golfer_router.js"));
app.use("/", require("./src/server/routers/participant_router.js"));
app.use("/", require("./src/server/routers/auth_router.js"));
app.use("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

const init = async () => {
  try {
    await syncAndSeed();
    const port = process.env.port || 1919;
    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

init();
