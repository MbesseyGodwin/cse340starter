// /routes/inventoryRoute.js

// Needed Resources 
const express = require("express");
const router = new express.Router();
const { invCont, displayVehicleDetail } = require("../controllers/invController");

router.get("/type/:classificationId", invCont.buildByClassificationId);

// Corrected Route
router.get("/detail/:vehicleId", displayVehicleDetail);

module.exports = router;
