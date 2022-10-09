import express from "express";

let configViewEngine = (app) => {
  app.use(express.static("./src/public")); //Check at here when impport img
  app.set("view engine", "ejs"); //ejs == jsp
  app.set("views", "./src/views");
};
module.exports = configViewEngine;
