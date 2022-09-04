const express = require('express');

const petsRouter = require('./pets/pets.router');

const loginRouter = require('./login/login.router')

const api = express.Router();

api.use("/login",loginRouter)
api.use("/pets", petsRouter);

module.exports = api;