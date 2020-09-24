//aquí declaramos las rutas para nuestro user
const express = require("express");
const users_details = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const User_Detail = require("../models/User_Detail");
users_details.use(cors());

process.env.SECRET_KEY = "secret";


// REGISTRO
users_details.post("/registerUser", (req, res) => {
    const today = new Date();
  
    //res.send(console.log(req.body));
    const userData = {
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    password: req.body.password,
    status: req.body.status,
    UserType: req.body.UserType,
    phone: req.body.phone,
      created: today,
    };
    User_Detail.findOne({
      where: {
        usuario: req.body.usuario,
      },
    })
      //TODO bcrypt
      .then((user) => {
        if (!user) {
          User.create(userData)
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
      password: req.body.password,
    },
  })
    .then((user) => {
      if (user) {
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

module.exports = users_details;
