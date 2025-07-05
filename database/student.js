const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const db = require("./db");

const Student = db.define("student", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true, // always adds on so the the mutiple driffent people can a driffent id
    primaryKey: true,
  },

  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false, //wont allow a coloum to be left blank
  },

  gpa: {
    //gpa - decimal between 0.0 and 4.0
    type: DataTypes.FLOAT,
    allowNull: false, //the coloum has some sort of value
    validate: {
      max: 4.0,
      min: 0.0,
    },
  },

  image: {
    defaultValue:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2Fthe-random-person-i-made--19844054600819630%2F&psig=AOvVaw1nA8orGcyvOp7LVd0LXrV_&ust=1751490608495000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLj8x4zJnI4DFQAAAAAdAAAAABAZ",
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
