var express = require("express");
var router = express.Router();
const managecontrollers = require("../controllers/manage");
/* GET home page. */

router.post("/loginmanage", managecontrollers.loginmanage);
router.post("/selectclean", managecontrollers.selectclean);
router.post("/addclean", managecontrollers.addclean);
router.post("/updateclean", managecontrollers.updateclean);
router.post("/deleteclean", managecontrollers.deleteclean);
router.post("/selectclient", managecontrollers.selectclient);
router.post("/addclient", managecontrollers.addclient);
router.post("/selectsum", managecontrollers.selectsum);
router.post("/deletemessage", managecontrollers.deletemessage);
router.post("/selectmessage", managecontrollers.selectmessage);
router.post("/addmessage", managecontrollers.addmessage);
router.post("/updatemessage", managecontrollers.updatemessage);
router.post("/selectshopping", managecontrollers.selectshopping);
router.post("/addshopping", managecontrollers.addshopping);
router.post("/updateshopping", managecontrollers.updateshopping);
router.post("/deleteshopping", managecontrollers.deleteshopping);
router.post("/selectorder", managecontrollers.selectorder);
router.post("/addorder", managecontrollers.addorder);
router.post("/updateorder", managecontrollers.updateorder);
router.post("/deleteorder", managecontrollers.deleteorder);
module.exports = router;
