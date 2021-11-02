const mongoose = require("mongoose");
const ContactUS = require("./../modle/contactUsModle");

exports.createProblem = async (req, res) => {
  try {
    console.log(req.body);
    const newProblem = await ContactUS.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        problem: newProblem,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent!",
    });
  }
};

exports.getAllProblems = async (req, res) => {
  try {
    const query = await ContactUS.find();

    res.status(201).json({
      status: "success",
      data: {
        problems: query,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
