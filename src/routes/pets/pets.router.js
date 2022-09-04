const express = require("express");

const {
  httpFetchPetByID,
  httpFetchAllPets,
  httpCreatePet,
  httpUpdatePetByID,
  httpRemovePetByID,
} = require("./pets.controller");

const { checkToken } = require("../login/login.controller");

const petsRouter = express.Router();

petsRouter.get("/", checkToken, httpFetchAllPets);
petsRouter.get("/:id", checkToken, httpFetchPetByID);
petsRouter.post("/", checkToken, httpCreatePet);
petsRouter.patch("/:id", checkToken, httpUpdatePetByID);
petsRouter.delete("/:id", checkToken, httpRemovePetByID);

module.exports = petsRouter;
