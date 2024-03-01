const Response = require("../models/blocks/Response")
const List = require("../models/blocks/List")
const Text = require("../models/blocks/Text")
const Projects = require("../models/projects/NewProject")


const CreateTextblock = async(req, res) =>{

    try {
        const projectId = req.body.project_Id; // Assuming 'project' is the key for the project ID in the request body
        const project = await Projects.findById(projectId);
        if (!project) {
            return res.status(404).send("Project not found");
        }
        const textblock = new Text({ project_Id: projectId });
        const result = await textblock.save();
        // Assuming you want to associate this text block with the project
        project.combain_blocks.push(result);
        await project.save();
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};



const CreateListblock = async(req ,res)=>{
    try {
        const projectId = req.body.project_Id;
        console.log("CreateListblock",projectId)
        const project = await Projects.findById(projectId);
        if (!project) {
            return res.status(404).send("Project not found");
        }
        const listblock = new List({ project_Id: projectId });
        const result = await listblock.save();
        project.combain_blocks.push(result);
        await project.save();
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

const CreateResponseblick = async(req,res)=>{
    try {
        const projectId = req.body.project_Id;
        const project = await Projects.findById(projectId);
        if (!project) {
            return res.status(404).send("Project not found");
        }
        const Resblock = new Response({ project_Id: projectId });
        const result = await Resblock.save();
        project.combain_blocks.push(result);
        await project.save();
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}





const removingBlocks = async (req, res) => {
    try {
        const { type, id, projectId } = req.body;
        const project = await Projects.findById(projectId);
        if (!project) {
            return res.status(404).send("Project not found");
        }
        const blockIndex = project.combain_blocks.findIndex(item => item._id.toString() === id);
        if (blockIndex === -1) {
            return res.status(404).send("Block not found");
        }
        project.combain_blocks.splice(blockIndex, 1);
        await project.save();
        return res.status(200).send(`${type} block removed successfully`);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};



module.exports = {CreateTextblock,CreateListblock,CreateResponseblick,removingBlocks} ;