const mongoose = require("mongoose");

const serviceCardSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    description: {
      paragragh: { type: String },
      features: [{ type: String }],
      listType: { type: String, enum: ["disc", "number", "star"] },
    },
    imageurl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ServiceCard = mongoose.model("ServiceCard", serviceCardSchema);

module.exports = ServiceCard;
