const db = require("./db");
const { Duck, User } = require("./index");
const { Student, Campus } = require("./index");

const seed = async () => {
  db.logging = false;
  await db.sync({ force: true }); // Drop and recreate tables

  const users = await User.bulkCreate([
    { username: "admin", passwordHash: User.hashPassword("password") },
    { username: "user1", passwordHash: User.hashPassword("password") },
    { username: "user2", passwordHash: User.hashPassword("password") },
  ]);

  const ducks = await Duck.bulkCreate([
    { name: "James Pond" },
    { name: "Quakie Chan" },
    { name: "Goose" },
  ]);
  
  const campuses = await Campus.bulkCreate([
    { 
      name: "Borough of Manhattan Community College",
      address: "199 Chambers Street",
      description: "Borough of Manhattan Community College (BMCC) is a " +
      "large community college in New York City, part of the City University " +
      "of New York (CUNY) system. It's known for its diverse student body, " +
      "offering over 50 associate degree programs and a wide range of continuing " +
      "education options. BMCC is a leader in awarding degrees to minority " +
      "students and is recognized for its role in increasing household income.",
    },
  ]);

  const students = await Student.bulkCreate([
    { 
      firstName: "Joseph", 
      lastName: "Collado",
      email: "joseph@example.com",
      gpa: 4.0,
    },
    { 
      firstName: "Phone", 
      lastName: "Swa",
      email: "phone@example.com",
      gpa: 4.0,
    },
    { 
      firstName: "Olivia", 
      lastName: "Wilson-Simmonds",
      email: "olivia@example.com",
      gpa: 4.0,
      campusId: 1,
    },
    { 
      firstName: "Muhammad", 
      lastName: "Shaikh",
      email: "muhammad@example.com",
      gpa: 4.0,
      campusId: 1,
    },
  ]);

  console.log(`👨‍🎓👩‍🎓 Created ${students.length} students`);
  console.log(`🏫 Created ${campuses.length} campuses`);
  console.log("🌱 Seeded the database");
  await db.close();
};

seed();
