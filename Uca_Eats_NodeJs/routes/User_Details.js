//aquí declaramos las rutas para nuestro user
const express = require("express");
const users_details = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const User_Detail = require("../models/User_Detail");
users_details.use(cors());

process.env.SECRET_KEY = "secret";




module.exports = users_details;
