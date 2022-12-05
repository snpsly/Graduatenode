var express = require("express");
var router = express.Router();
const messagecontrollers = require("../controllers/message");
/* GET home page. */

router.post("/loginmessage", messagecontrollers.loginmessage);
router.post("/selectorder", messagecontrollers.selectorder);
router.post("/selectclean", messagecontrollers.selectclean);
router.post("/selectclean2", messagecontrollers.selectclean2);
router.post("/selectcleanorder", messagecontrollers.selectcleanorder);
module.exports = router;
