const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/detail/:concert_id", async function (req, res, next) {
  try {
    const [rows,fields] = await pool.query(
        `select * from concerts join halls using(hall_id) join ticket_zones using(concert_id) where concert_id = ?`,
        [req.params.concert_id]
    )
    console.log(rows)
    return res.send(rows)
  } catch (err) {
    return next(err)
  }
});

exports.router = router;