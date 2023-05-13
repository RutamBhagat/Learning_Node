import express from "express";
import bodyParser from "body-parser";
import { routes as adminroutes } from "./routes/admin.js";
import shoproutes from "./routes/shop.js";
import path from "path";
import rootDir from "./utils/path.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.set("views", "views");

app.use("/admin", adminroutes);

app.use(shoproutes);

app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
