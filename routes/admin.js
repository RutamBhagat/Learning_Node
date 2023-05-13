import express from "express";
import path from "path";
import rootDir from "../utils/path.js";

export const routes = express.Router();

export const products = [];

routes.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

routes.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

export default routes;
