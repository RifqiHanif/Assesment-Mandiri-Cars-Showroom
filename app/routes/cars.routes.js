const express = require("express");
const {addCar, listCar, removeCar, updateCar} = require("../controller/cars.controller");
const router = express.Router();

router.post("/", addCar);
router.get("/", listCar);
router.delete("/:id", removeCar);
router.put("/", updateCar);

module.exports = router;