const db = require("../db/index");
exports.loginmanage = (req, res, next) => {
  const { username, password } = req.body;
  if (req.body.username.length < 3 || req.body.password.length < 3) {
    res.send("用户或密码长度必须大于3");
  } else {
    db.query(
      "select * from admin  where username =  ? and password = ?",
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

exports.selectclean = (req, res, next) => {
  const right = req.body.page * 7;
  const left = right - 6;
  if (!req.body.username) {
    db.query(
      "select * from user where identity = 1 limit ?,?",
      [left, right],
      (err, results) => {
        if (err) res.send("失败");
        res.send(results);
      }
    );
  } else {
    db.query(
      "select * from user where identity = 1 and INSTR(username,?)>0 limit ?,?",
      [req.body.username, left, right],
      (err, results) => {
        if (err) res.send("失败");
        res.send(results);
      }
    );
  }
};

exports.addclean = (req, res, next) => {
  req.body.identity = 1;
  if (req.body.username.length < 3 || req.body.password.length < 3) {
    res.send("用户或密码长度必须大于3");
  } else {
    db.query("insert into user  SET ?", req.body, (err, results) => {
      if (err) res.send("失败");
      res.send("成功");
    });
  }
};
exports.updateclean = (req, res, next) => {
  const { id, username, password, name } = req.body;
  db.query(
    "update   user set username = ? ,password= ? ,name= ?  where id = ?",
    [username, password, name, id],
    (err, results) => {
      if (err) res.send("失败");
      res.send(results);
    }
  );
};
exports.deleteclean = (req, res, next) => {
  const { id } = req.body;
  db.query("delete  from user  where id = ?", [id], (err, results) => {
    if (err) res.send("失败");
    res.send(results);
  });
};
//client
exports.selectclient = (req, res, next) => {
  const right = req.body.page * 7;
  const left = right - 6;
  if (!req.body.username) {
    db.query(
      "select * from user where identity = 0 limit ?,?",
      [left, right],
      (err, results) => {
        if (err) res.send("失败");
        res.send(results);
      }
    );
  } else {
    db.query(
      "select * from user where identity = 0 and INSTR(username,?)>0 limit ?,?",
      [req.body.username, left, right],
      (err, results) => {
        if (err) res.send("失败");
        res.send(results);
      }
    );
  }
};

exports.addclient = (req, res, next) => {
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

exports.selectsum = (req, res, next) => {
  db.query("select count(identity) from user", (err, results) => {
    res.send(results);
  });
};
//message
exports.selectmessage = (req, res, next) => {
  const right = req.body.page * 7;
  const left = right - 6;
  if (!req.body.username) {
    db.query(
      "select * from message   limit ?,?",
      [left, right],
      (err, results) => {
        if (err) res.send("失败");
        res.send(results);
      }
    );
  } else {
    db.query(
      "select * from message where  INSTR(username,?)>0 limit ?,?",
      [req.body.username, left, right],
      (err, results) => {
        if (err) res.send("失败");
        res.send(results);
      }
    );
  }
};

exports.addmessage = (req, res, next) => {
  if (req.body.username.length < 3 || req.body.password.length < 3) {
    res.send("用户或密码长度必须大于3");
  } else {
    db.query("insert into message  SET ?", req.body, (err, results) => {
      if (err) res.send("失败");
      res.send("成功");
    });
  }
};
exports.updatemessage = (req, res, next) => {
  const { id, username, password, name } = req.body;
  db.query(
    "update   message set username = ? ,password= ? ,name= ?  where id = ?",
    [username, password, name, id],
    (err, results) => {
      if (err) res.send("失败");
      res.send(results);
    }
  );
};
exports.deletemessage = (req, res, next) => {
  const { id } = req.body;
  db.query("delete  from message  where id = ?", [id], (err, results) => {
    if (err) res.send("失败");
    res.send(results);
  });
};
//商品
exports.selectshopping = (req, res, next) => {
  const right = req.body.page * 7;
  const left = right - 6;

  db.query("select * from shop1 ", [left, right], (err, results) => {
    if (err) res.send("失败");

    res.send(results);
  });
};
exports.addshopping = (req, res, next) => {
  db.query("insert into shop1  SET ?", req.body, (err, results) => {
    if (err) res.send("失败");
    res.send("成功");
  });
};
exports.updateshopping = (req, res, next) => {
  const { id, shop_title, shop_num, shop_price, shop_sn, shop_date } = req.body;

  db.query(
    "update shop1 set shop_title = ? ,shop_num= ? ,shop_price= ? ,shop_sn= ? , shop_date=? where id = ?",
    [shop_title, shop_num, shop_price, shop_sn, shop_date, id],
    (err, results) => {
      if (err) res.send("失败");
      res.send(results);
    }
  );
};
exports.deleteshopping = (req, res, next) => {
  const { id } = req.body;
  db.query("delete  from shop1  where id = ?", [id], (err, results) => {
    if (err) res.send("失败");
    res.send(results);
  });
};
//order
exports.selectorder = (req, res, next) => {
  db.query("select * from orders ", (err, results) => {
    if (err) res.send("失败");

    res.send(results);
  });
};
exports.addorder = (req, res, next) => {
  db.query("insert into orders  SET ?", req.body, (err, results) => {
    if (err) res.send("失败");
    res.send("成功");
  });
};
exports.updateorder = (req, res, next) => {
  const {
    id,
    shop_title,
    shop_price,
    user_id,
    clean_id,
    date,
    order_state,
    user_address,
    date_time,
    date_pause,
    shop_num,
    user_phone,
    user_name,
    clean_name,
  } = req.body;

  db.query(
    "update orders set shop_title= ? ,shop_num= ? ,shop_price= ? ,shop_sn= ?  ,user_id=? , clean_id=? , date=?, order_state=?, user_address=?, date_time=?, date_pause=?, user_phone=?, user_name=?, clean_name=? where id = ?",
    [
      id,
      shop_title,
      shop_price,
      user_id,
      clean_id,
      date,
      order_state,
      user_address,
      date_time,
      date_pause,
      shop_num,
      user_phone,
      user_name,
      clean_name,
    ],
    (err, results) => {
      if (err) res.send("失败");
      res.send(results);
    }
  );
};
exports.deleteorder = (req, res, next) => {
  const { id } = req.body;
  db.query("delete  from orders  where id = ?", [id], (err, results) => {
    if (err) res.send("失败");
    res.send(results);
  });
};
