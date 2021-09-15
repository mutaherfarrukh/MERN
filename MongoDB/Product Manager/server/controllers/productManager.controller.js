const ProductManager = require("../models/productManager.model");

module.exports.findAllProductManagers = (req,res) => {
    console.log("hello it is me, the find all function")

    ProductManager.find({})
        .then(allProductManagers => res.json({results: allProductManagers}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.createProductManager = (req,res) => {
    ProductManager.create(req.body)
    .then(newProductManager => res.json({results: newProductManager}))
    .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.findSingleProductManager = (req,res) => {
    ProductManager.findOne({_id: req.params._id})
    .then(singleProductManager => res.json({results: singleProductManager}))
    .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.deleteSingleProductManager = (req,res) => {
    ProductManager.deleteOne({_id: req.params._id})
    .then(results => res.json({results: results}))
    .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.updateSingleProductManager = (req,res) => {
    ProductManager.updateOne({_id: req.params._id}, 
        req.body)
        .then(singleProductManager => res.json({results: singleProductManager}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}