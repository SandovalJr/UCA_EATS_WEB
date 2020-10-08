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

// Informacion de una categoria
categorys.get("/infoCategory/:category_id", (req, res) => {
  Category.findOne({
    where: {
      category_id: req.params.category_id,
    },
  })
    .then(function (categorias) {
      res.status(200).json(categorias);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
});

// Agregar Categoria
categorys.post("/AddCategory", (req, res) => {
  const CategoryData = {
    category_name: req.body.category_name,
    img_category: "",
  };
  Category.findOne({
    where: {
      category_name: req.body.category_name,
    },
  })
    //TODO bcrypt
    .then((categoria) => {
      if (!categoria) {
        console.log(categoria);
        Category.create(CategoryData)
          .then(function (NewCategory) {
            res.status(200).json(NewCategory);
          })
          .catch(function (error) {
            res.status(500).json(error);
          });
      } else {
        return res.status(500).json({
          ok: false,
          err,
        });
      }
    })
    .catch((err) => {
      res.send("error ya existe categoria: " + err);
    });
});

// Eliminar Categoria
categorys.get("/EliminarCategory/:category_id", (req, res) => {
  Category.destroy({
    where: {
      category_id: req.params.category_id,
    },
  })
    .then(function (eliminado) {
      res.status(200).json(eliminado);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
});



module.exports = categorys;
