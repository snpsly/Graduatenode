var express = require("express");
var router = express.Router();
const usercontrollers = require("../controllers/user");
/* GET users listing. */
router.post("/register", usercontrollers.register);
router.post("/login", usercontrollers.login);
module.exports = router;
