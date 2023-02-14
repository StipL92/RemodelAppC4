const express = require("express");
const User = require("../models/userModels");
const expressAsyncHandler = require('express-async-handler');
const bcrypt = require ('bcryptjs');
//const generateToken = require('../utils');

const userRouter = express.Router();

/*
userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          username: user.username,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(404).send({ message: "Email o Usuario invalidos" });
  })
);
*/

userRouter.post(
    "/signin",
    expressAsyncHandler(async (req, res) => {
      const user = await User.findOne({ username: req.body.username });
      if (user) {
        if (req.body.password == user.password) {
          res.send({
            _id: user._id,
            username: user.username,
          });
          return;
        }
      }
      res.status(404).send({ message: "Usuario o contraseña invalidos" });
    })
  );

module.exports = userRouter;