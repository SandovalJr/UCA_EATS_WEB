const Sequelize = require("sequelize"); //para usar el modelo del user
const db = require("../database/db.js");
//datos de nuestra BD
module.exports = db.sequelize.define(
  "sell",
  {
    sell_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sell_description: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);
