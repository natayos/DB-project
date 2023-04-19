const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/:concert_id/zone", async function (req, res, next) {
  try {
    const [rows,fields] = await pool.query(
        `SELECT * FROM ticket_zones join concerts using(concert_id) having concert_id = ?`,
        [req.params.concert_id]
    )
    console.log(rows)
    return res.send(rows)
  } catch (err) {
    return next(err)
  }
});

router.post("/:concert_id/zone/stand", async function (req, res, next) {
    try {
      const [rows,fields] = await pool.query(
          `SELECT * FROM ticket_zones join concerts using(concert_id) having concert_id = ?`,
          [req.params.concert_id]
      )
      console.log(rows)
      return res.send(rows)
    } catch (err) {
      return next(err)
    }
});

exports.router = router;
