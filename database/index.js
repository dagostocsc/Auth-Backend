const db = require("./db");
const User = require("./user");

const Student = require("./student");
const Campus = require("./campus");

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  db,
  Student,
  Campus,
  User,
};
