import Express from "express";

const HOST = "127.0.0.1";
const PORT = 8080;
const app = Express();

app.get("/", (req, res) => {
  return res.send(`<h1>Hello It's Docker with NodeJS 🐳</h1>`);
});

app.listen(PORT, HOST, () => {
  console.log(`[Express] Server(${HOST}:${PORT}) Start`);
});
