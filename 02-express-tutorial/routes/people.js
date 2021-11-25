const express = require("express");
const router = express.Router();
let { people } = require("../data");


// app.get("/api/people", (req, res) => {
router.get("/", (req, res) => {
    res.status(200).json({ success: true, data: people });
  });

// app.post("/api/people", (req, res) => {
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).send({ success: true, person: name });
});

// app.post("/api/people/postman", (req, res) => {
router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).send({ success: true, data: [...people, name] });
});

// app.put("/api/people/:id", (req, res) => {
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  return res.status(200).send({ success: true, data: newPeople });
});

// app.delete("/api/people/:id", (req, res) => {
router.delete("/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
