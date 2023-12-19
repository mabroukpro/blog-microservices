const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios
    .post("http://posts-srv:4000/events", event)
    .catch((err) => console.error(err));

  axios
    .post("http://comments-srv:4001/events", event)
    .catch((err) => console.error(err));
  axios
    .post("http://query-srv:4002/events", event)
    .catch((err) => console.error(err));

  axios
    .post("http://moderation-srv:4003/events", event)
    .catch((err) => console.error(err));

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
