const app = require("express").Router();
const {
  models: { Participant },
} = require("../db/postgres_info.js");

module.exports = app;

app.post("/api/auth", async (req, res, next) => {
  try {
    res.send({ token: await Participant.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

app.get("/api/me", async (req, res, next) => {
  try {
    res.send(await Participant.byToken(req.headers.authorization));
  } catch (err) {
    next(err);
  }
});

app.post("/api/add/auth", async (req, res, next) => {
  try {
    console.log("auth router was called");
    const auth = await { ...req.body };
    console.log("auth router:", auth);
    console.log(auth);
    const user = await Participant.create(auth);
    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send({ error: err.message });
});
