var express = require("express");
var router = express.Router();
const homecontrollers = require("../controllers/index");
/* GET home page. */
router.get("/commodity", homecontrollers.commodity);
router.get("/detail", homecontrollers.detailshop);

module.exports = router;
