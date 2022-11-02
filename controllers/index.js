const db = require("../db/index");

var path = require("path");
exports.commodity = (req, res, next) => {
  db.query("SELECT * from shop", (err, results) => {
    if (err) console.log("失败");
    for (let i = 0; i < results.length; i++) {
      const buf = Buffer.from(results[i].product_url, "binary");
      results[i].product_url =
        "data:image/webp;base64," + buf.toString("base64");
    }

    res.send(results);
  });
};
exports.detail01 = (req, res, next) => {
  res.sendFile(path.join(__dirname, "images/", "1.jpg"));
};

exports.detailshop = (req, res, next) => {
  const id = req.query.iid;

  db.query("SELECT * from shop1 where shop_sn =?", id, (err, results) => {
    if (err) console.log("失败");

    res.send(results);
  });
};
