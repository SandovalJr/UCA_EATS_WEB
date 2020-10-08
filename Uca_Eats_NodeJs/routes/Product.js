const express = require("express");
const products = express.Router();
const cors = require("cors");
const Product = require("../models/Product");
products.use(cors());

process.env.SECRET_KEY = "secret";

products.get("/productocalis",(req,res)=>{

res.json({status:"apiproductos"})

})

module.exports = products;