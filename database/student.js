const { DataTypes } = require("sequelize");
const db = require("./db");

const Student = db.define("student", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
<<<<<<< HEAD
    allowNull: false,
    validate: { isEmail: true },
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
    validate: { isUrl: true },
  },
  gpa: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: { min: 0.0, max: 4.0 },
=======
    unique: true,
    validate: {
      isEmail: true,
    },
>>>>>>> routes
  },
});

module.exports = Student;
