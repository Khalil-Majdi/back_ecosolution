
const { findById } = require('../models/Projet.js');
const Projet = require('../models/Projet.js')
const addProjet= async (req,res)=>{
    const projet = new Projet(req.body)
  try {
    await projet.save()
    console.log("DATA ADDED , YOU ARE AWESOME");
    res.send(200)
  } catch (e) {
    res.status(400).send("mo7sen")
  }
}

const getProjetById= async(req,res)=>{
  try {
		let result = await Projet.findById(req.params._id);
		if (!result) {
			res.sendStatus(404);
			return;
		}
		res.status(200).json(result);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

const getProjets= async(req,res)=>{
  try {
		let result = await Projet.find();
		if (!result) {
			res.sendStatus(404);
			return;
		}
		res.status(200).json(result);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

module.exports = {
  addProjet,
  getProjetById,
  getProjets
};




