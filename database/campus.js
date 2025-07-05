const { DataTypes } = require("sequelize");
const db = require("./db");

const Campus = db.define("campus", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, //This field cannot be empty in the database
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue:
      "https://render.fineartamerica.com/images/rendered/medium/print/8/5.5/break/images/artworkimages/medium/1/indiana-university-sample-gates-university-icons.jpg",
    validate: { isUrl: true },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false, //This field cannot be empty in the database
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false, //This field cannot be empty in the database
  },
});

module.exports = Campus;
