const mongoose = require("mongoose");

const CreateProjectsSchema = mongoose.Schema(
  
  {
    name:{
      type:String,
      default:"New-Project",
    },
    combain_blocks:{
      type:Array,
      default:[]
    }
  },{ timestamps: true }
);

const Projects = mongoose.model("Projects", CreateProjectsSchema);

module.exports = Projects;
