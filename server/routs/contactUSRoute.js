const express = require("express");
const contactController = require("./../controller/contactUSController");
const router = express.Router();

router
  .route("/")
  .get(contactController.getAllProblems)
  .post(contactController.createProblem);

module.exports = router;
