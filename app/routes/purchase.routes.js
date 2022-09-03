const express = require("express");
const {newPurchase, listPurchase} = require("../controller/purchase.controller");
const router = express.Router();

router.post("/", newPurchase);
router.get("/", listPurchase);

module.exports = router;