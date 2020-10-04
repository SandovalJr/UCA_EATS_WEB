const Sequelize = require("sequelize"); //para usar el modelo del user
const db = require("../database/db.js");
//datos de nuestra BD
module.exports = db.sequelize.define(
  "ticket",
  {
    ticket_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category_ticket_id: {
      type: Sequelize.INTEGER,
    },
    user_id_ticket: {
      type: Sequelize.INTEGER,
    },
    products_bought_id: {
      type: Sequelize.INTEGER,
    },
    cancel_order: {
      type: Sequelize.STRING,
    },
    start_date: {
      type: Sequelize.STRING,
    },
    end_date: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);
