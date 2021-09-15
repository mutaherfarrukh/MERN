const ProductManagerController = require("../controllers/productManager.controller");
const ProductManager = require("../models/productManager.model");

module.exports = app => {
    app.get("/api/productManagers/all", ProductManagerController.findAllProductManagers);

    app.post("/api/productManagers/create", ProductManagerController.createProductManager);

    app.get("/api/productManagers/:_id", ProductManagerController.findSingleProductManager);

    app.delete("/api/productManagers/:_id/delete", ProductManagerController.deleteSingleProductManager);

    app.patch("/api/productManagers/:_id/update", ProductManagerController.updateSingleProductManager);
}