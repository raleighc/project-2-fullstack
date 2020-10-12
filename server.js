const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql2");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// VIEWS ROUTES
app.get("/", (req, res) => {
  res.render("index");
});

// API ROUTES
app.get("api/config", (req, res) => {
  res.json({
    success: true,
  });
});

db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`);
  });
});
