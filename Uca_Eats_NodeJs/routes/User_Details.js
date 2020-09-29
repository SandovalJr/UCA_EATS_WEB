//aquí declaramos las rutas para nuestro user
const express = require("express");
const users_details = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const User_Detail = require("../models/User_Detail");
users_details.use(cors());
const bcrypt = require("bcryptjs");

process.env.SECRET_KEY = "secret";

users_details.get("/", (req, res) => {
  res.json({ status: "API WORKS" });
});

// REGISTRO
users_details.post("/registerUser", (req, res) => {
  const today = new Date();

  const userData = {
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    password: req.body.password,
    UserType: req.body.UserType,
    phone: req.body.phone,
    created: today,
  };

  // Encriptar contraseña
  const salt = bcrypt.genSaltSync();
  userData.password = bcrypt.hashSync(userData.password, salt);
  // res.send(console.log(userData));
  User_Detail.findOne({
    where: {
      username: req.body.username,
    },
  })
    //TODO bcrypt
    .then((user) => {
      if (!user) {
        User_Detail.create(userData)
          .then((user) => {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440,
            });
            res.json({ token: token });
          })
          .catch((err) => {
            res.send("error: " + err);
          });
      } else {
        return res.status(500).json({
          ok: false,
          err,
        });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

// LOGIN
users_details.post("/login", (req, res) => {
  console.log("works");

  User_Detail.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (user) {
        // Compara passwords encriptadas
        const validarPassword = bcrypt.compareSync(
          req.body.password,
          user.password
        );
        if (!validarPassword) {
          return res.status(400).json({
            ok: false,
            message: "Contraseña no valida",
          });
        }
        // console.log(user);
        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440,
        });
        res.json({ token: token });
      } else {
        res.send("User does not exist");
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

users_details.get("/profile", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  User_Detail.findOne({
    where: {
      user_id: decoded.user_id,
    },
  })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.send("User does not exist");
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

users_details.get("/ListaUsuarios", (req, res) => {
  User_Detail.findAll({
    where: {
      UserType: "cliente",
    },
  })
    .then(function (autos) {
      res.status(200).json(autos);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
});

module.exports = users_details;
