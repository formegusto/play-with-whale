import Express from "express";
import morgan from "morgan";
import axios, { HttpStatusCode } from "axios";
import process from "process";

const [_1, _2, myhost, myport] = process.argv;
console.log(process.argv);
const app = Express();

app.use(morgan("dev"));
app.use(Express.json());

app.get("/", (req, res) => {
  return res.status(HttpStatusCode.Ok).json({
    message: `Hello, I'm ${myhost}:${myport}`,
  });
});

app.post("/", async (req, res) => {
  const { host, port } = req.body;

  const data = (await axios.get(`http://${host}:${port}`)).data;

  return res.status(HttpStatusCode.Ok).json({
    now: `Hello, I'm ${myhost}:${myport}`,
    next: data,
  });
});

app.listen(myport, () => {
  console.log(`[Express] Start ${myhost}:${myport} Server :)`);
});
