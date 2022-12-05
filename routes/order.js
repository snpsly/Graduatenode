var express = require("express");
var router = express.Router();
const ordercontrollers = require("../controllers/order.js");
/* GET home page. */
router.post("/inputorder", ordercontrollers.inputorder);
router.post("/getorders", ordercontrollers.getorders);
router.post("/getclearorders", ordercontrollers.getclearorders);
router.post("/pushclearorders", ordercontrollers.pushclearorders);
router.post("/getmyclearorders", ordercontrollers.getmyclearorders);
router.post("/closeorder", ordercontrollers.closeorder);
module.exports = router;
