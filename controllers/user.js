const db = require("../db/index");
exports.register = (req, res, next) => {
  req.body.identity = 0;
  if (req.body.username.length < 3 || req.body.password.length < 3) {
    res.send("用户或密码长度必须大于3");
  } else {
    db.query("insert into user  SET ?", req.body, (err, results) => {
      if (err) res.send("失败");
      res.send("成功");
    });
  }
};
exports.login = (req, res, next) => {
  db.query(
    "select * from user  where username = ? and password = ? and identity =?",
    [req.body.username, req.body.password, req.body.selectedIndex],
    (err, results) => {
      if (err) res.send("失败");
      if (results.length > 0) {
        res.send(results[0]);
      } else {
        res.send("用户密码错误");
      }
    }
  );
};
