var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var orderRouter = require("./routes/order");
var manageRouter = require("./routes/manage");

var messageRouter = require("./routes/message");
var cors = require("cors");

var app = express();
const ws = require("express-ws");
ws(app);
const wss = ws(app).getWss("/");
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public", "images")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/order", orderRouter);
app.use("/manage", manageRouter);
app.use("/message", messageRouter);

app.ws("/socket", (ws, req) => {
  console.log("连接成功！");
  // send给客户端发消息
  // on是监听事件
  // message表示服务端传来的数据
  ws.on("message", (msg) => {
    // 给所有的客户端广播消息
    wss.clients.forEach((e) => {
      console.log(msg);
      e.send(msg);
    });
  });
  // close 事件表示客户端断开连接时执行的回调函数
  ws.on("close", function (e) {
    console.log("close connection");
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
