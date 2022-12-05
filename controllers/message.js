const db = require("../db/index");
exports.loginmessage = (req, res, next) => {
  const { username, password } = req.body;
  if (req.body.username.length < 3 || req.body.password.length < 3) {
    res.send("用户或密码长度必须大于3");
  } else {
    db.query(
      "select * from message  where username =  ? and password = ?",
      [username, password],
      (err, results) => {
        if (err) res.send("失败");

        if (results.length < 1) {
          res.send("失败");
        } else {
          res.send("成功");
        }
      }
    );
  }
};
exports.selectorder = (req, res, next) => {
  db.query(
    "select * from orders order by order_state",
    req.body,
    (err, results) => {
      if (err) res.send("失败");
      res.send(results);
    }
  );
};
exports.selectclean = (req, res, next) => {
  db.query(
    "select * from user where identity = 1 ",

    (err, results) => {
      if (err) res.send("失败");
      res.send(results);
    }
  );
};
exports.selectclean2 = (req, res, next) => {
  db.query(
    "select * from user where  id =? ",
    req.body.item.clean_id,
    (err, results) => {
      if (err) res.send("失败");
      res.send(results);
    }
  );
};
exports.selectcleanorder = (req, res, next) => {
  console.log(req.body);
  db.query(
    "select * from orders where  not order_state = 3 and clean_id = ?",
    req.body.id,
    (err, results) => {
      if (err) res.send("失败");
      res.send(results);
    }
  );
};
