const express = require("express");
const router = express.Router();
const db = require("../models/db");

// Insurance Apply
router.post("/apply", (req, res) => {
  const {
    customer_name,
    customer_phone,
    customer_email,
    mobile_brand,
    mobile_model,
    imei_number,
    purchase_date,
    plan,
    premium,
    payment_status,
    dealer_id,
    dealer_name
  } = req.body;

  const sql = `INSERT INTO insurance_applications 
    (customer_name, customer_phone, customer_email, mobile_brand, mobile_model, imei_number, purchase_date, plan, premium, payment_status, dealer_id, dealer_name)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    sql,
    [customer_name, customer_phone, customer_email, mobile_brand, mobile_model, imei_number, purchase_date, plan, premium, payment_status, dealer_id, dealer_name],
    (err, result) => {
      if (err) return res.status(500).json({ error: "DB insert error" });
      res.json({ success: true, application_id: result.insertId });
    }
  );
});

module.exports = router;
