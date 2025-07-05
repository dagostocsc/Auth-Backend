const express = require("express");
const router = express.Router();
const { Student, Campus, Campus } = require("../database");

// get all campaus
router.get("/", async (req, res) => {
  try {
    const campus = await Campus.findAll(); //it looks through the table and and checks all the rows
    res.status(200).send(campus); //returns a sucessfull
  } catch (error) {
    //if the condtion is not met return error
    console.log("error has accrued ");
  }
  console.log(campus);
});

// req' (request) object in Express JS which is used to represent the incoming HTTP request that consists of data like
//  res' (response) which is used to send the HTTP response to the client which allows the modification of headers and
// consists of status codes, and resources.

// GET campus by ID
router.get("/id", async (req, res) => {
  //Acess the primary key from the user URL
  try {
    const campausID = Number(req.params.id); //Acess the primary key from the user URL
    const campus = await Campus.findByPk(campausID); //find a entry from a table using provied key
    if (campus === null); //if it null no campus with that id exists
    return res.sendStatus(404); //send a 404 not found response
    const students = await Student.findAll({ where: { campusId: campusID } });
    const campusDetails = {
      campus: campus,
      students: students,
    };
    res.status(200).send(campusDetails);
  } catch (error) {
    console.log(err);
  }
});

// POST new campuses
router.post("/", async (req, res) => {
  try {
    const post = req.body;
    await campus.create(campus);
    res.status(201);
  } catch (err) {
    console.log(err);
  }
});
// PUT campus by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedInfo = req.body;
    const campusID = Number(req.params.id);
    const campus = await Campus.findByPk(campusID);
    if (campus === null) return res.sendStatus(404);

    campus.name = updatedInfo.name;
    campus.address = updatedInfo.address;
    campus.imageUrl = updatedInfo.imageUrl;
    campus.description = updatedInfo.description;
    campus.save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});
// DELETE campus by ID
router.delete("/:id", async (req, res) => {
  try {
    const campausID = Number(req.params.id); //Acess the primary key from the user URL
    const campus = await Campus.findByPk(campausID); //find a entry from a table using provied key
    if (campus === null); //if it null no campus with that id exists
    return res.sendStatus(404); //send a 404 not found response

    await campus.destroy();
    res.status(200).send(campusDetails);
  } catch (error) {
    console.log(err);
  }
});

moudle.exports = router;
