const db = require("../db/index");
exports.inputorder = (req, res, next) => {
  db.query("insert into orders  SET ?", req.body, (err, results) => {
    if (err) res.send("失败");
    res.send("成功");
  });
};
exports.getorders = (req, res, next) => {
  db.query(
    "select * from orders  where ? order by order_state",
    req.body,
    (err, results) => {
      if (err) res.send("失败");
      res.send(results);
    }
  );
};
exports.getclearorders = (req, res, next) => {
  db.query("select * from orders where order_state = 0 ", (err, results) => {
    if (err) res.send("失败");
    res.send(results);
  });
};
exports.pushclearorders = (req, res, next) => {
  console.log(req.body);
  const { clean_id, id, updateorder, clean_name } = req.body;
  if (updateorder === 1) {
    db.query(
      "update   orders set clean_id = ? ,order_state = ? ,clean_name=? where id = ?",
      [clean_id, updateorder, clean_name, id],
      (err, results) => {
        if (err) res.send("失败");
        res.send(results);
      }
    );
  } else if (updateorder === 2) {
    db.query(
      "update   orders set order_state = ?  where id = ?",
      [updateorder, id],
      (err, results) => {
        if (err) res.send("失败");
        res.send(results);
      }
    );
  } else if (updateorder === 3) {
    db.query(
      "update   orders set order_state = ?  where id = ?",
      [updateorder, id],
      (err, results) => {
        if (err) res.send("失败");
        res.send(results);
      }
    );
  }
};
exports.getmyclearorders = (req, res, next) => {
  const { clean_id } = req.body;

  db.query(
    "select * from  orders where clean_id = ? order by order_state",
    clean_id,
    (err, results) => {
      if (err) res.send("失败");
      res.send(results);
    }
  );
};
exports.closeorder = (req, res, next) => {
  const { id } = req.body;

  db.query(
    "update    orders set order_state = 999 where id = ? ",
    id,
    (err, results) => {
      if (err) res.send("失败");
      res.send(results);
    }
  );
};
