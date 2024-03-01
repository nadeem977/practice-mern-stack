const mongoose = require("mongoose");

const textblockschema = mongoose.Schema(
  {
    name: {
      type: String,
      default: "new text",
    },
    type: {
      type: String,
      default: "TEXT",
    },
    text: {
      type: String,
    },
    project_Id: {
      type: String,
    },
  },
  { timestamps: true }
);

const Text = mongoose.model("TEXT", textblockschema);

module.exports = Text;
