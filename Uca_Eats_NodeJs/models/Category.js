const Sequelize = require("sequelize"); //para usar el modelo del user
const db = require("../database/db.js");
//datos de nuestra BD
module.exports = db.sequelize.define(
  "category",
  {
    category_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: Sequelize.STRING,
    },
    img_category: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);
