const pets = require('./pets.mongo')
const fs = require("fs");
const path = require('path');
const { parse } = require("csv-parse");

//Given no parameters, return all the pet

function loadPetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "sample_data", "pets_test.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        //pets.create(data);
        //console.log(data)
      })
      .on("error", (err) => {
        console.log(err);
      })
      .on("end", () => {
        console.log(`${pets.length -1} pets found!`);
        //console.log(transactions[0]);
        resolve();
      });
  });
}

function fetchAllPet() {
  const response = pets.find({}, { _id: 0, __v: 0 }).sort({ petNumber: 1 });
  return response;
}

function fetchPetByID(id) {
  const obj = {
    _id : id
  }
  const response = pets.findOne(obj, { _id: 0, __v: 0 });
  return response;
}

async function createPet(obj){
    const response = await pets.create(obj);
    return response;
}

async function updatePetByID(id, updatedData, options){
    return await pets.findOneAndUpdate(id, updatedData, options)
}

function removePetByID(id) {

    const response = pets.findByIdAndDelete(id);
    return response;
}


module.exports = {
  fetchAllPet,
  loadPetsData,
  createPet,
  fetchPetByID,
  updatePetByID,
  removePetByID,
};