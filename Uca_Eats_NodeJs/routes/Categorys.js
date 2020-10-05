//aquí declaramos las rutas para nuestro user
const express = require("express");
const categorys = express.Router();
const cors = require("cors");
const Category = require("../models/Category");
categorys.use(cors());

process.env.SECRET_KEY = "secret";

categorys.get("/categorias", (req, res) => {
  res.json({ status: "API WORKS categorias" });
});

// Listar Categorias
categorys.get("/CategoryList", (req, res) => {
  Category.findAll({
    where: {},
  })
    .then(function (categorias) {
      res.status(200).json(categorias);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
});





module.exports = categorys;
