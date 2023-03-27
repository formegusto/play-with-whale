import App from "./app.js";
import DB from "./db.js";

DB.connect().then(() => {
  console.log(`[REDIS CLIENT] Connected. :)`);
  new App().Start();
});
