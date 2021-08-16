require('dotenv').config()
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const {REACT_APP_USER, REACT_APP_HOST, REACT_APP_PASSWORD, REACT_APP_DATABASE} = process.env

var app_user = REACT_APP_USER
var app_host = REACT_APP_HOST
var app_password = REACT_APP_PASSWORD
var app_database = REACT_APP_DATABASE

// console.log(app_user)

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  user: app_user,
  host: app_host,
  password: app_password,
  database: app_database,
  insecureAuth : true
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO `users`.`employees` (`name`, `age`, `country`, `position`, `wage`) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE employees SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("your server is running on port 3001");
});