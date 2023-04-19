const express = require("express");
const pool = require("../config");

router = express.Router();

router.post("/login", async function (req, res, next) {
  try {
    const [rows,fields] = await pool.query(
        `select * from users where username = ? and password = ?`,
        [req.body.username,req.body.password]
    )
    if (rows.length == 0) {
        return res.send({confirm: false})
    }
    else {
        return res.send({confirm: true, id: rows[0].user_id})

    }
  } catch (err) {
    return next(err)
  }
});

exports.router = router;
