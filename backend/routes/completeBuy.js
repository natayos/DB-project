const express = require("express");
const pool = require("../config");

router = express.Router();

router.post("/complete-buy", async function (req, res, next) {
  try {
    const rows = await pool.query(
        `insert into orders(order_id,user_id,order_time,delivery_email,total_price,payment_id,status) values(null,?,CURRENT_TIMESTAMP,'aaaaaaa@gmail.com',?,4,?)`,
        [req.body.user_id,req.body.total_price,req.body.status]
    )
    console.log(rows)
    return res.send(rows)
  } catch (err) {
    return next(err)
  }
});

exports.router = router;
