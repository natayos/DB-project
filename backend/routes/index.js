const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const [rows,fields] = await pool.query(
        `select * from concerts join halls using(hall_id)`
    )
    return res.send(rows)
  } catch (err) {
    return next(err)
  }
});

exports.router = router;
