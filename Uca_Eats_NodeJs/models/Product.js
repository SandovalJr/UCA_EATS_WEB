const Sequelize = require("sequelize"); //para usar el modelo del user
const db = require("../database/db.js");
//datos de nuestra BD
module.exports = db.sequelize.define(
  "product",
  {
    product_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: Sequelize.STRING,
    },
    available: {
      type: Sequelize.BLOB,
    },
    description: {
      type: Sequelize.STRING,
    },
    Price: {
      type: Sequelize.FLOAT,
    },
    id_category: {
      type: Sequelize.INTEGER,
    },
    img_product: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);
