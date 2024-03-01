const {CreateNewProject,DeleteProject,getAllProjects,renameProject} = require('../controllers/NewProject')

const express = require('express')


const router = express.Router()


router.post('/Createprojects',CreateNewProject)
router.post('/deleteproject',DeleteProject)
router.get('/allProjects',getAllProjects)
router.post('/projectRenaming',renameProject)
module.exports = router