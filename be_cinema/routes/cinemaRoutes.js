const express = require("express");
const router = express.Router();
const Postis = require("../models/Postis");


router.get("/", (req,res) => {
  res.send("Ciaooo");
})

router.get("/view", (req, res) => {
  Postis.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    })
})

router.put("/posti", (req, res) => {
  console.log(req.body);
  Postis.findOneAndUpdate({ codice: req.body.codice},
    { nominativo: req.body.nominativo, occupato: true})
    .then((resp) => {
      console.log("wow", resp);
    })
})

router.put("/cancella", (req, res) => {
  console.log(req.body);
  Postis.findOneAndUpdate({ codice: req.body.codice},
    { nominativo: " ", occupato: false})
    .then((resp) => {
      console.log("wow", resp);
    })
})

module.exports = router;
