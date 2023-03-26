import Express from "express";

const HOST = "127.0.0.1";
const PORT = 8080;
const app = Express();

app.get("/", (req, res) => {
  return res.send(`
    <html>
    <head>
      <title>iamwhale.</title>
    </head>
    <body>
      <h1>Hello It's Docker with NodeJS 🐳</h1>
      <h2>안녕! 나는 고래에요! 🤚🏻</h2>
    </body>
    </html>`);
});

app.listen(PORT, () => {
  console.log(`[Express] Server(${HOST}:${PORT}) Start`);
});
