import { Router } from "express";
import bcrypt from bcrypt

const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();


router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name,  email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name,  email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
Router.get("/users", (req,res)=> {
  const{mensajerecibido}= req.params

})

const password = req.body.password;
const encryptedPassword = bcrypt.hashSync(password, 10); 
User.create({ id, email, password: encryptedPassword })

module.exports = router;
