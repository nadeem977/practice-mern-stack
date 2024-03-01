const Projects = require("../models/projects/NewProject");

const CreateNewProject = async (req, res) => {
  const { title, desc } = req.body;
  try {
    const newProject = new Projects({ title, desc });
    const result = await newProject.save();
    const projectCount = await Projects.countDocuments();
    res.status(200).json({ result, projectCount });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const DeleteProject = async (req, res) => {
  const { id } = req.body;
  try {
    await Projects.findByIdAndDelete(id);
    res.status(200).send("project deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const getAllProjects = async (req, res) => {
  try {
    const result = await Projects.find({});
    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};


const renameProject = async (req, res) => {
      console.log("function called",res.body)
     try {
        const {project,name} = req.body
        const result = await Projects.findByIdAndUpdate(project,{$set:{name:name}})
        res.status(200).send(result);
     } catch (error) {
        console.log(error);
     }
}



const removeBlocks = async(req,res)=>{

 try {
  console.log(req.body)
 } catch (error) {
  console.log(error)
 }
   

}



module.exports = { CreateNewProject, DeleteProject, getAllProjects,renameProject };
