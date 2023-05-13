import express from "express";
import bodyParser from "body-parser";
import { routes as adminroutes } from "./routes/admin.js";
import shoproutes from "./routes/shop.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.set("views", "views");

app.use("/admin", adminroutes);

app.use(shoproutes);

app.use("/", (req, res, next) => {
  res.render("404", {
    title: "Something went wrong",
    message: "Sorry, the page you are looking for could not be found or has been removed.",
  });
});

app.listen(3000);
