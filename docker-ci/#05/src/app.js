import Express from "express";
import DB from "./db.js";

class App {
  constructor() {
    this.app = Express();
    this.SetRoutes();
  }

  get PORT() {
    return 8080;
  }

  SetRoutes() {
    this.app.get("/", async (_, res) => {
      let count = await DB.v4.get("count");
      if (!count) {
        await DB.v4.set("count", 0);
        count = await DB.v4.get("count");
      } else {
        await DB.v4.set("count", +count + 1);
        count = await DB.v4.get("count");
      }

      return res.send(`
            <html>
                <head>
                    <title>Count Whale 🐳</title>
                </head>
                <body>
                    <h1>Count! Count! ${count}</h1>
                </body>
            </html>
        `);
    });
  }

  Start() {
    this.app.listen(this.PORT, () => {
      console.log(`[Express Msg] Server listen :${this.PORT}`);
    });
  }
}

export default App;
