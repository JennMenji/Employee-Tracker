const express = require("express");
const router = express.Router();
const db = require("../../db/connection");
// const inputCheck = require("../../utils/inputCheck");

// GET ROUTE
// To return all the data in the employees table
// router.get("/employees", (req, res) => {
//   const sql = `SELECT employees. *, departments.name
//                 AS party_name
//                 FROM employees
//                 LEFT JOIN departments
//                 ON employees.party_id = departments.id`;

//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: rows,
//     });
//   });
// });

// // GET ROUTE
// // Query for Read Operation - GET a single employee
// router.get("/employee/:id", (req, res) => {
//   const sql = `SELECT employees. *, departments.name
//                 AS party_name
//                 FROM employees
//                 LEFT JOIN departments
//                 ON employees.party_id = departments.id
//                 WHERE employees.id = ?`;
//   const params = [req.params.id];

//   db.query(sql, params, (err, row) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: row,
//     });
//   });
// });

// PUT ROUTE
// Update a employee's party
// router.put("/employee/:id", (req, res) => {
//   const errors = inputCheck(req.body, "party_id");
//   if (errors) {
//     res.status(400).json({ error: errors });
//     return;
//   }

//   const sql = `UPDATE employees SET party_id = ?
//                   WHERE id = ?`;
//   const params = [req.body.party_id, req.params.id];
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       // check if a record was found
//     } else if (!result.affectedRows) {
//       res.json({
//         message: "employee not found.",
//       });
//     } else {
//       res.json({
//         message: "success",
//         data: req.body,
//         changes: result.affectedRows,
//       });
//     }
//   });
// });

// // DELETE ROUTE
// // Query for Delete Operation - DELETE a employee
// router.delete("/employee/:id", (req, res) => {
//   const sql = `DELETE FROM employees WHERE id = ?`;
//   const params = [req.params.id];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.statusMessage(400).json({ error: res.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: "employee not found",
//       });
//     } else {
//       res.json({
//         message: "deleted",
//         changes: result.affectedRows,
//         id: req.params.id,
//       });
//     }
//   });
// });

// POST ROUTE
router.post("/employee", ({ body }, res) => {
  const errors = inputCheck(
    body,
    "first_name",
    "last_name",
    "role_id",
    "manager_id"
  );
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
              VALUES (?, ?, ?, ?)`;
  const params = [
    body.first_name,
    body.last_name,
    body.role_id,
    body.manager_id,
  ];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});

module.exports = router;
