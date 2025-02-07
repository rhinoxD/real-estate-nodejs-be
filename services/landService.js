const Land = require("../models/Land");

async function createLand(land) {
    const createdLand = new Land(land)
    await createdLand.save()
    return createdLand
}

async function getLandById(landId) {
    return Land.findById(landId)
}

async function deleteLand(landId) {
    const land = await Land.findByIdAndDelete(landId);   
    await land.save();
}

async function updateLand(landId, land) {
    const existing = await Land.findById(landId);

    existing.name = land.name;
    existing.place = land.place;
    existing.price = land.price;
    existing.size = land.size;
    existing.description = land.description;
    existing.owner = land.owner;
    existing.longitude = land.longitude;
    existing.latitude = land.latitude;

    await existing.save();
    return existing;
}

module.exports = {
    createLand,
    getLandById,
    deleteLand,
    updateLand
}