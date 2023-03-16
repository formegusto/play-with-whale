const express = require("express");
const redis = require("redis");

const client = redis.createClient({
  socket: {
    host: "redis-server",
    port: 6379,
  },
  legacyMode: true,
});
client
  .connect()
  .then(() => {
    console.log("connect");
  })
  .catch((err) => {
    console.log("error", err);
  });

const app = express();
app.use(express.json());

// client.v4.set("name", "formegusto").then;

app.get("/", async (req, res) => {
  const { key } = req.query;

  if (!key) return res.send(`<h1 style="color:red">You're Bad Guy</h1>`);
  const value = await client.v4.get(key);
  if (!value) return res.send(`<h1 style="color:red">Not Found</h1>`);

  return res.send(`<h1 style="color:blue">${value}</h1>`);
});

app.post("/", async (req, res) => {
  const { key, value } = req.body;

  await client.v4.set(key, value);
  const check = await client.v4.get(key);

  return res.json({ value: check });
});

app.listen(8080, () => {
  console.log("It's Docker 🐳 With Redis.");
});
