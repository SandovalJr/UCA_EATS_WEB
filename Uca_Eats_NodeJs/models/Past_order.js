const Sequelize = require("sequelize"); //para usar el modelo del user
const db = require("../database/db.js");
//datos de nuestra BD
module.exports = db.sequelize.define(
  "past_order",
  {
    order_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    product_id: {
      type: Sequelize.INTEGER,
    },
    order_date: {
      type: Sequelize.STRING,
    },
    order_time: {
      type: Sequelize.STRING,
    },
    total_payment: {
      type: Sequelize.FLOAT,
    },
  },
  {
    timestamps: false,
  }
);
