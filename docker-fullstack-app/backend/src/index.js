import Express from "express";
import BodyParser from "body-parser";
import db from "./db";

const app = Express();

app.use(BodyParser.json());

app.get("/api/values", (_, res) => {
  db.query("SELECT * FROM lists;", (err, results, _) => {
    if (err) return res.status(500).send(err);
    else return res.json(results);
  });
});

app.post("/api/value", (req, res) => {
  const { value } = req.body;

  db.query(
    `INSERT INTO lists(value) VALUES("${value}")`,
    (err, results, fileds) => {
      if (err) return res.status(500).send(err);
      else return res.json({ success: true, value });
    }
  );
});

db.query(
  `CREATE TABLE lists(
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
`,
  (err, results, fields) => {
    console.log("results", results);
  }
);

app.listen(5000, () => {
  console.log("[Server Message] Server Start! Hello, I'm Express :)");
});
