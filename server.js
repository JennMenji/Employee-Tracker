const express = require("express");
const db = require("./db/connection.js");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// USE apiRoutes
app.use("/api", apiRoutes);

db.query(`SELECT * FROM departments WHERE id = 1`, (err, rows) => {
  console.log(rows);
});

// Default response for any other request (Not Found)
// ALWAYS LEAVE AS THE LAST ROUTE OR ELSE IT WILL OVERRIDE ANY OTHER GET ROUTE AFTER IT
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
