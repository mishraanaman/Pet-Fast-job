const {
  fetchAllPet,
  fetchPetByID,
  createPet,
  updatePetByID,
  removePetByID,
} = require("../../models/pets.model.js");
const { create } = require("../../models/pets.mongo.js");

async function httpFetchAllPets(req, res) {
  const success = await fetchAllPet();
  //console.log("success", success);
  if (!success) {
    return res.status(400).json({
      error: "Please contact IT Support",
    });
  }

  return res.status(200).json(success);
}

async function httpFetchPetByID(req, res) {
  const id = req.params.id;

  const success = await fetchPetByID(id);
  if (!success) {
    return res.status(400).json({
      error: "Pet not found for this ID",
    });
  }

  return res.status(200).json(success);
}

async function httpCreatePet(req, res) {
  const name = req.body.name;
  const type = req.body.type;
  const breed = req.body.breed;
  const age = req.body.age;

  if (!name || !type || !breed || !age) {
    return res.status(400).json({
      error: "Missing Pet property",
    });
  }

  const obj = {
    name : name,
    type : type,
    breed : breed,
    age : age
  }

  const success = await createPet(obj);
  if (!success) {
    return res.status(400).json({
      error: "Please contact IT Support",
    });
  }
  return res.status(201).json(success);
}

async function httpUpdatePetByID(req, res) {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await updatePetByID(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
async function httpRemovePetByID(req, res) {
  const id = req.params.id;

  const pet = await fetchPetByID(id);
  let success = {};
  if (pet) {
    success = await removePetByID(id);
    if (!success) {
      return res.status(400).json({
        error: "Please contact IT Support",
      });
    }
  } else
    return res.status(400).json({
      error: "Pet not found for this ID",
    });

  return res.status(200).json(success);
}

module.exports = {
  httpFetchAllPets,
  httpFetchPetByID,
  httpCreatePet,
  httpUpdatePetByID,
  httpRemovePetByID,
};
