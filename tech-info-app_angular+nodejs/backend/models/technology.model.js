const mongoose = require("mongoose");
const { Schema } = mongoose;

const TechnologySchema = new Schema(
  {
    name: { type: String, maxlength: 50 },
    description: { type: String },
    logo: { type: String },
    tags: [{ type: String }], // array of tags
  },
  { timestamps: { createdAt: true, updatedAt: true } } // timestamps config
);

module.exports = mongoose.model('Technology', TechnologySchema);
