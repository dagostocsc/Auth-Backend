const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
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

  gpa: {
    type: DataTypes.FLOAT,
    allowNull: false, 
    validate: {
      max: 4.0,
      min: 0.0,
    },
  },

  image: {
    defaultValue:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgenerated.photos%2Ffaces%2Fmale&psig=AOvVaw2cvDben2rfUiQ4PUM3aw-d&ust=1751845693016000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDY1vXzpo4DFQAAAAAdAAAAABAE",
    type: DataTypes.BLOB, //Blob data types store big files (like images or videos) inside your database
  },

  email: {
    type: DataTypes.STRING,
    unique: true, //makes
    validate: {
      isEmail: true,
    },
  },
});
module.exports = Student;
