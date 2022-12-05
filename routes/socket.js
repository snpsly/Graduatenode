var express = require("express");
var expressWs = require("express-ws");

var router = express.Router();
expressWs(router); //将 express 实例上绑定 websocket 的一些方法
// router.get("/user", function (ws, req) {
//   req.send("11");
// });

router.ws("/user", function (ws, req) {
  ws.on("message", function (msg) {
    ws.send("pong" + msg);
  });
});
// .get('/user', function(req, resp) {  // get方法
//   resp.send('response')
// });

module.exports = router;
