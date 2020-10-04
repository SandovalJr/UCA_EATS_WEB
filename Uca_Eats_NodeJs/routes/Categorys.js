//aquí declaramos las rutas para nuestro user
const express = require("express");
const categorys = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const Category = require("../models/Category");
categorys.use(cors());

process.env.SECRET_KEY = "secret";

categorys.get("/categorias", (req, res) => {
  res.json({ status: "API WORKS categorias" });
});

module.exports = categorys;
