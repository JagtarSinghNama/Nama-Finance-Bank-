const express = require("express");
const router = express.Router();
const db = require("../models/db");

// Dealer Login
router.post("/dealer-login", (req, res) => {
  const { dealer_id, password } = req.body;
  db.query(
    "SELECT * FROM dealers WHERE dealer_id=? AND password=?",
    [dealer_id, password],
    (err, results) => {
      if (err) return res.status(500).json({ error: "DB error" });
      if (results.length > 0) {
        res.json({ success: true, dealer: results[0] });
      } else {
        res.json({ success: false, message: "Invalid Dealer ID or Password" });
      }
    }
  );
});

module.exports = router;
