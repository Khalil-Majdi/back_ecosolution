const mongoose = require("mongoose");

const ProjetSchema = mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
});

//const Projet = mongoose.models.Projet || mongoose.model("Projet", ProjetSchema);
const Projet = mongoose.model("Projet", ProjetSchema);
module.exports = Projet;
