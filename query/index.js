const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});
app.post("/events", (req, res) => {
  console.log(req.body);
  const { type, data } = req.body;
  if (type === "postCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }
  if (type === "commentCreated") {
    const { id, content, postId } = data;
    console.log(postId);

    posts[postId].comments.push({ id, content });
  }
  console.log(posts);
  res.send({});
});

app.get("/posts", (req, res) => {});

app.listen(4002, () => {
  console.log("Listening on 4002");
});
