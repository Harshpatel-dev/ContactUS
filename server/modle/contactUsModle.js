// import mongoose from "mongoose";
const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: [true, "USER_ID MUST HAVE A NUMBER"],
    // unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "EMAIL MUST HAVE A STRING"],
    trim: true,
  },
  transaction_Mode: {
    type: String,
    required: [true, "TRANSACTION MUST HAVE A NAME"],
    trim: true,
  },
  payment_method: {
    type: String,
    required: [true, "PAYMENT_METHOD  MUST HAVE A NAME"],
    trim: true,
  },
  problem: {
    type: String,
    required: [true, "PROBLEM MUST HAVE A STRING"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const ContactUS = mongoose.model("ContactUS", contactSchema);

module.exports = ContactUS;
